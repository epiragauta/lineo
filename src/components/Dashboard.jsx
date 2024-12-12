// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from "react";
import { getNumberOfSubmissions } from "../backend/api/numberOfSubmissions";
import { FaClipboardList, FaChartBar } from "react-icons/fa"; // Example icons
import DashboardCard from "./dashboard/DashboardCard";

import { supabase } from "../backend/supabaseClient";
import { countQuestions } from "../utils/countQuestions";

import { getRadioQuestionScore } from "../backend/api/radioQuestionScore";
import { getSliderQuestionScore } from "../backend/api/sliderQuestionScore";
import { getScore } from "../utils/getScore";

import PieChart from "./dashboard/PieChart";
import Histogram from "./dashboard/Histogram";



const Dashboard = ({ subsection, label, formQuestions }) => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [radioFrequencies, setRadioFrequencies] = useState([]);
  const [sliderFrequencies, setSliderFrequencies] = useState({});

  const [sectionLevel, setSectionLevel] = useState({});

  const formId = subsection;

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);

      try {
        // Fetch the number of submissions
        const count = await getNumberOfSubmissions(formId);

        if (count !== null) {
          setSubmissionCount(count);
        } else {
          setError("Failed to fetch the number of submissions.");
        }

        // Fetch frequencies for radio and slider questions
        const newRadioFrequencies = {
          "Sí": 0,
          "No": 0,
        };
        const newSliderFrequencies = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };

        if (count){
          const {data, error} = await supabase
            .from('submissions')
            .select('responses')
            .eq('form_id', formId)
            .order("created_at", { ascending: false }) // Obtener la más reciente
            .limit(1)
            .single(); // Obtener un solo registro


          let maxScore = 0;
          let sumScore = 0;

          for (const question of formQuestions) {

            if (question.type === "radio" && question.options.length === 2
              && question.options.includes("Sí") && question.options.includes("No")
            ) {
              const answer = data.responses[question.name];
              maxScore += 1;
              if(answer) {
                if(answer === "Sí") {
                  sumScore += 1;
                  newRadioFrequencies["Sí"] += 1;
                }
                if(answer === "No") {
                  newRadioFrequencies["No"] += 1;
                }
              }
            } else if (question.type === "slider") {
              const answer = data.responses[question.name];
              maxScore += 4;
              if(answer) {
                sumScore += answer;
                newSliderFrequencies[answer + 1] += 1;
              }
            }
          }

          setRadioFrequencies([
            { id: "Sí", label: "Sí", value: newRadioFrequencies["Sí"] ? newRadioFrequencies["Sí"] : 0 },
            { id: "No", label: "No", value: newRadioFrequencies["No"] ? newRadioFrequencies["No"] : 0 },
          ]);
          setSliderFrequencies( Object.entries(newSliderFrequencies || {}).map(([Puntaje, count]) => ({ Puntaje, Frecuencia: count })) );

          // Compute section level using getScore utility
          const score = getScore(1, maxScore, sumScore);
          if (score !== null) {
            setSectionLevel(score);

          } else {
            setError("Failed to compute score of the section.");
          }
        }
        else{

          setRadioFrequencies([
            { id: "Sí", label: "Sí", value: 0 },
            { id: "No", label: "No", value: 0 },
          ]);
          setSliderFrequencies( Object.entries(newSliderFrequencies || {}).map(([Puntaje, count]) => ({ Puntaje, Frecuencia: count })) );

        }
      } catch (err) {
        setError("An unexpected error occurred.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [formId, formQuestions]);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">{label}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card: Number of Submissions */}
        <DashboardCard
          icon={<FaClipboardList className="text-blue-600 w-6 h-6" />}
          title="Calificación"
          value={submissionCount && sectionLevel.score ? sectionLevel.score : "N/A"}
          percentage={sectionLevel.percentage ? sectionLevel.percentage : ""}
          loading={loading}
          error={error}
        />

        {/* Second Card: Nivel */}
        <DashboardCard
          icon={<FaChartBar className="text-green-600 w-6 h-6" />}
          title="Nivel"
          value={submissionCount && sectionLevel.description ? sectionLevel.description : "N/A"} // Level logic
          color={sectionLevel.color ? sectionLevel.color : "black"}
          loading={loading}
        />
      </div>

      {/* Centered Title for Charts */}
      <h2 className="text-center text-xl font-bold mt-8 mb-6">Análisis de Preguntas</h2>

      {/* Pie Chart */}
      <PieChart key = "PieChart" data={radioFrequencies} label="Respuestas Sí/No" />

      {/* Histogram */}
      <Histogram 
        key = {"HistogramChart"} 
        data={sliderFrequencies} 
        keys={["Frecuencia"]} 
        indexBy="Puntaje" 
        label={"Preguntas cuantitativas"}
        />
      
      {/* grafica con datos de si y nos, es decir cantidad de si y nos sobre todas las preguntas usando newradio */}
      {/* grafica con de conteo de uno, dos tres usando los datos de newslider*/}
    </div>
  );
};

export default Dashboard;
