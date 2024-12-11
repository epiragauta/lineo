// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from "react";
import { getNumberOfSubmissions } from "../backend/api/numberOfSubmissions";
import { FaClipboardList, FaChartBar } from "react-icons/fa"; // Example icons
import DashboardCard from "./dashboard/DashboardCard";
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
  const [radioFrequencies, setRadioFrequencies] = useState({});
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
        const newRadioFrequencies = {};
        const newSliderFrequencies = {};

        let answers = 0;
        let maxScore = 0;
        let sumScore = 0;

        for (const question of formQuestions) {
          if (
            question.type === "radio" &&
            question.options.includes("Sí") &&
            question.options.includes("No")
          ) {
            const frequencies = await getRadioQuestionScore(formId, question.key);
            newRadioFrequencies[question.key] = frequencies;

            // Radio logic: only consider "Sí" responses
            // frequncies[0] -> yes frequence
            const yesCount = frequencies[0] || 0;
            const noCount = frequencies[1] || 0;

            maxScore += 1; // Each "Sí" counts as 1 point
            sumScore += yesCount;
          } else if (question.type === "slider") {
            const frequencies = await getSliderQuestionScore(formId, question.key);
            newSliderFrequencies[question.key] = frequencies;

            maxScore += 4; // Max slider score is 4
            // Slider logic: iterate over all possible slider values
            for (let i = 0; i <= 4; i++) {
              const count = frequencies[i] || 0;
              sumScore += count * i; // Weighted score
            }
          }
        }

        setRadioFrequencies(newRadioFrequencies);
        setSliderFrequencies(newSliderFrequencies);

        // Compute section level using getScore utility
        const score = getScore(count, maxScore, sumScore);
        if (score !== null) {
          setSectionLevel(score);
        } else {
          setError("Failed to compute score of the section.");
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
          title="Número de envíos"
          value={submissionCount}
          loading={loading}
          error={error}
        />

        {/* Second Card: Nivel */}
        <DashboardCard
          icon={<FaChartBar className="text-green-600 w-6 h-6" />}
          title="Nivel"
          value={submissionCount && sectionLevel.description ? sectionLevel.description : "N/A"} // Level logic
          color={sectionLevel.color}
          loading={loading}
        />
      </div>

      {/* Centered Title for Charts */}
      <h2 className="text-center text-xl font-bold mt-8 mb-6">Análisis de Preguntas</h2>
      
      {/* Render Charts */}
      {formQuestions.map((question, index) => {
        if (
          question.type === "radio" &&
          question.options.includes("Sí") &&
          question.options.includes("No")
        ) {
          // Radio Question Pie Chart
          const frequencies = radioFrequencies[question.key] || { Sí: 0, No: 0 };
          const pieData = [
            { id: "Sí", label: "Sí", value: frequencies[0] || 0 },
            { id: "No", label: "No", value: frequencies[1] || 0 },
          ];

          return <PieChart key={index} data={pieData} label={question.label} />;
        } else if (question.type === "slider") {
          // Slider Question Histogram
          const frequencies = sliderFrequencies[question.key] || {};
          const histogramData = Object.entries(frequencies).map(
            ([Puntaje, count]) => ({ Puntaje, Frequencia: count })
          );

          return (
            <Histogram
              key={index}
              data={histogramData}
              keys={["Frequencia"]}
              indexBy="Puntaje"
              label={question.label}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Dashboard;
