// src/components/Dashboard.jsx
import React from "react";
import { FaClipboardList, FaChartBar } from "react-icons/fa";
import DashboardCard from "./dashboard/DashboardCard";
import PieChart from "./dashboard/PieChart";
import Histogram from "./dashboard/Histogram";
import useDashboardData from "../hooks/useDashboardData";
import LineoLogo from "../assets/logos/lineo/lineo_gris.png";

const Dashboard = ({ subsection, label, formQuestions }) => {
  const formId = subsection;
  const {
    submissionCount,
    radioFrequencies,
    sliderFrequencies,
    sectionLevel,
    loading,
    error,
  } = useDashboardData(formId, formQuestions);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h1 className="text-2xl font-semibold mb-6 text-dark_blue">{label}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card: Number of Submissions */}
        <DashboardCard
          icon={<FaClipboardList className="text-primary w-6 h-6" />}
          title="Calificación"
          value={submissionCount && sectionLevel.score ? sectionLevel.score : "N/A"}
          percentage={sectionLevel.percentage ? sectionLevel.percentage : ""}
          loading={loading}
          error={error}
          bgColor="bg-primary_light"
          borderColor="border-primary"
        />

        {/* Second Card: Nivel */}
        <DashboardCard
          icon={<FaChartBar className="text-dark_blue w-6 h-6" />}
          title={`Nivel ${sectionLevel.level ? sectionLevel.level : "N/A"}`}
          value={submissionCount && sectionLevel.description ? sectionLevel.description : "N/A"}
          color={sectionLevel.color ? sectionLevel.color : "black"}
          loading={loading}
          bgColor="bg-dark_blue_light"
          borderColor="border-dark_blue"
        />
      </div>

      {/* Centered Title for Charts */}
      <h2 className="text-center text-xl font-bold mt-8 mb-6 text-dark_blue">
        Análisis de Preguntas
      </h2>

      {/* Pie Chart */}
      <div className="bg-primary_light rounded-lg p-4">
        <PieChart key="PieChart" data={radioFrequencies} label="Respuestas Sí/No" />
      </div>

      {/* Histogram */}
      <div className="bg-dark_blue_light rounded-lg p-4">
        <Histogram
          key={"HistogramChart"}
          data={sliderFrequencies}
          keys={["Frecuencia"]}
          indexBy="Puntaje"
          label={"Preguntas cuantitativas"}
        />
      </div>

      <div className="top-4 right-0 w-full flex justify-center items-center mt-6">
        <img src={LineoLogo} alt="Lineo Logo" className="w-32" />
      </div>
    </div>
  );
};

export default Dashboard;