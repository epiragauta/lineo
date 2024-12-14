import React, {useState, useEffect} from 'react';
import formsConfig from '../data/formsConfig';

import { getNumberOfSubmissions } from "../backend/api/numberOfSubmissions";
import { getScore } from "../utils/getScore";
import { supabase } from "../backend/supabaseClient";

import { FaClipboardList, FaChartBar } from "react-icons/fa"; 
import DashboardCard from "../components/dashboard/DashboardCard";


const Dashboard = () => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Extraer todos los formularios desde seccionConfig
    const forms = formsConfig.flatMap(section =>
      section.subsections.map(sub => ({
        formId: sub.subsection, // Asegúrate de que 'path' sea único por subsección
        formQuestions: sub.formQuestions,
        section: section.sectionLabel, // O 'section.section' si prefieres el número
      }))
    );
    console.log("useDashboardData: Formularios a procesar:", forms);

    if (!forms || forms.length === 0) {
      console.warn("useDashboardData: No hay formularios para procesar.");
      setLoading(false);
      return;
    }

    const fetchAllDashboardData = async () => {
      console.log("useDashboardData: Iniciando fetchAllDashboardData");
      setLoading(true);
      setError(null);
      setAccumulatedData([]); // Reiniciar datos

      try {
        // Utilizar Promise.all para manejar múltiples formularios de manera concurrente
        const allData = await Promise.all(
          forms.map(async ({ formId, formQuestions, section }) => {
            console.log(`useDashboardData: Procesando formId: ${formId}`);

            // Obtener el número de envíos para el formulario actual
            const count = await getNumberOfSubmissions(formId);
            if (count === null) {
              throw new Error(`Failed to fetch submissions for formId: ${formId}`);
            }

            // Inicializar frecuencias de respuestas
            const radioFrequencies = { "Sí": 0, "No": 0 };
            const sliderFrequencies = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            let maxScore = 0;
            let sumScore = 0;

            for (const question of formQuestions) {
              if (
                question.type === "radio" &&
                question.options.length === 2 &&
                question.options.includes("Sí") &&
                question.options.includes("No")
              ) {
                maxScore += 1;
              } else if (question.type === "slider") {
                maxScore += 4;
              }
            }

            if (count > 0) {
              // Obtener la última respuesta del formulario desde Supabase
              const { data: submissionData, error: supabaseError } = await supabase
                .from('submissions')
                .select('responses')
                .eq('form_id', formId)
                .order("created_at", { ascending: false })
                .limit(1)
                .single();

              if (supabaseError || !submissionData) {
                throw new Error(`Supabase error for formId: ${formId}`);
              }

              // console.log(`useDashboardData: Submission data para formId ${formId}:`, submissionData);

              // Procesar cada pregunta del formulario
              for (const question of formQuestions) {
                if (
                  question.type === "radio" &&
                  question.options.length === 2 &&
                  question.options.includes("Sí") &&
                  question.options.includes("No")
                ) {
                  const answer = submissionData.responses[question.name];
                  if (answer) {
                    if (answer === "Sí") {
                      sumScore += 1;
                      radioFrequencies["Sí"] += 1;
                    } else if (answer === "No") {
                      radioFrequencies["No"] += 1;
                    }
                  }
                } else if (question.type === "slider") {
                  const answer = submissionData.responses[question.name];
                  if (answer) {
                    sumScore += answer;
                    if (sliderFrequencies.hasOwnProperty(answer)) {
                      sliderFrequencies[answer] += 1;
                    } else {
                      console.warn(`useDashboardData: Unexpected slider value: ${answer}`);
                    }
                  }
                }
              }
            }

            // Calcular el puntaje de la subsección
            const score = getScore(1, maxScore, sumScore);
            if (score === null) {
              throw new Error(`Failed to compute score for formId: ${formId}`);
            }

            // console.log(`useDashboardData: Puntaje calculado para formId ${formId}:`, score);

            return {
              formId,
              section,
              maxScore,
              sumScore,
              score,
              radioFrequencies: [
                { id: "Sí", label: "Sí", value: radioFrequencies["Sí"] },
                { id: "No", label: "No", value: radioFrequencies["No"] },
              ],
              sliderFrequencies: Object.entries(sliderFrequencies).map(([Puntaje, Frecuencia]) => ({
                Puntaje,
                Frecuencia,
              })),
            };
          })
        );

        // Acumular datos por sección
        console.log("useDashboardData: Datos individuales:", allData);
        const accumulatedDataObj = allData.reduce((acc, curr) => {
          if (!acc[curr.section]) {
            acc[curr.section] = {
              section: curr.section,
              totalMaxScore: 0,
              totalSumScore: 0,
              subsections: [],
            };
          }
          acc[curr.section].totalMaxScore += curr.maxScore;
          acc[curr.section].totalSumScore += curr.sumScore;
          acc[curr.section].subsections.push(curr.formId);
          return acc;
        }, {});

        // Calcular el puntaje de cada sección basado en los puntajes acumulados
        for (const section in accumulatedDataObj) {
          const { totalMaxScore, totalSumScore } = accumulatedDataObj[section];
          const sectionScore = getScore(1, totalMaxScore, totalSumScore);
          if (sectionScore !== null) {
            accumulatedDataObj[section].sectionLevel = sectionScore;
            // console.log(`useDashboardData: Puntaje calculado para sección ${section}:`, sectionScore);
          } else {
            accumulatedDataObj[section].sectionLevel = null;
            setError(`Failed to compute score for section: ${section}`);
          }
        }

        // Convertir el objeto acumulado en un arreglo
        const accumulatedDataArray = Object.values(accumulatedDataObj);
        console.log("useDashboardData: Datos acumulados:", accumulatedDataArray);
        setAccumulatedData(accumulatedDataArray);
      } catch (err) {
        setError(err.message || "Ocurrió un error inesperado.");
        console.error("useDashboardData: Error en fetchAllDashboardData:", err);
      } finally {
        setLoading(false);
        console.log("useDashboardData: Finalizando fetchAllDashboardData");
      }
    };

    fetchAllDashboardData();
    // console.log("useDashboardData: Finalizando useEffect");
  }, []); // Ejecutar solo una vez al montar el hook

  return (
    <div className=" bg-login-bg bg-cover bg-no-repeat">
      <div className="w-full max-w-7xl mx-auto p-4 ">
        <div className="p-6 bg-white shadow-md rounded bg-opacity-60 ">
        <h1 className="text-2xl font-semibold mb-6">Dashboard General de las secciones</h1>

        {loading && <p>Cargando...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accumulatedData.map((section, index) => (
              <div key={index} className="bg-gray-100 p-4 border rounded shadow-sm">
                <h2 className="text-lg font-semibold mb-4">{section.section}</h2>
                <DashboardCard
                  icon={<FaClipboardList className="text-blue-600 w-6 h-6" />}
                  title="Calificación"
                  value={section.sectionLevel.score ? section.sectionLevel.score : "N/A"}
                  percentage={section.sectionLevel.percentage ? section.sectionLevel.percentage : ""}
                  loading={loading}
                  error={error}
                />
                <DashboardCard
                  icon={<FaChartBar className="text-green-600 w-6 h-6" />}
                  title= {`Nivel ${section.sectionLevel.level ? section.section.sectionLevel.level : "N/A"}`}
                  value={section.sectionLevel.description ? section.sectionLevel.description : "N/A"} // Level logic
                  color={section.sectionLevel.color ? section.sectionLevel.color : "black"}
                  loading={loading}
                />
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
