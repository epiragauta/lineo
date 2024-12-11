// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from "react";
import { getNumberOfSubmissions } from "../backend/api/numberOfSubmissions";
import { FaClipboardList, FaChartBar } from "react-icons/fa"; // Example icons
import DashboardCard from "./dashboard/DashboardCard";
import { countQuestions } from "../utils/countQuestions";

import { getRadioQuestionScore } from "../backend/api/radioQuestionScore";
import { getSliderQuestionScore } from "../backend/api/sliderQuestionScore";

import PieChart from "./dashboard/PieChart";
import Histogram from "./dashboard/Histogram";


const Dashboard = ({ subsection, label, formQuestions }) => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [radioFrequencies, setRadioFrequencies] = useState({});
  const [sliderFrequencies, setSliderFrequencies] = useState({});

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

        for (const question of formQuestions) {
          if (
            question.type === "radio" &&
            question.options.includes("Sí") &&
            question.options.includes("No")
          ) {
            const frequencies = await getRadioQuestionScore(formId, question.key);
            newRadioFrequencies[question.key] = frequencies;
          } else if (question.type === "slider") {
            const frequencies = await getSliderQuestionScore(formId, question.key);
            newSliderFrequencies[question.key] = frequencies;
          }
        }

        setRadioFrequencies(newRadioFrequencies);
        setSliderFrequencies(newSliderFrequencies);
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
          value={submissionCount > 50 ? "Avanzado" : "Básico"} // Example level logic
          loading={loading}
        />
      </div>

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
            ([value, count]) => ({ value, Frequency: count })
          );

          return (
            <Histogram
              key={index}
              data={histogramData}
              keys={["Frequency"]}
              indexBy="value"
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
