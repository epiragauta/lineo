// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from "react";
import { getNumberOfSubmissions } from "../../../../backend/api/numberOfSubmissions";
import { FaClipboardList, FaChartBar } from "react-icons/fa"; // Example icons
import DashboardCard from "../../../../components/dashboard/DashboardCard";

import PieChart from "../../../../components/dashboard/PieChart";
import Histogram from "../../../../components/dashboard/Histogram";

const Dashboard4_1 = ({ subsection, label }) => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formId = subsection;

  const histogramData = [
    { category: "A", Si: 30, No: 20 },
    { category: "B", Si: 50, No: 40 },
    { category: "C", Si: 70, No: 60 },
    { category: "D", Si: 90, No: 80 },
  ];

  const keys = ["Si", "No"];
  const indexBy = "category";

  const pieData = [
    {
      id: "Si",
      label: "Si",
      value: 70,
    },
    {
      id: "No",
      label: "No",
      value: 30,
    },
  ];

  useEffect(() => {
    const fetchSubmissionCount = async () => {
      try {
        const count = await getNumberOfSubmissions(formId);
        if (count !== null) {
          setSubmissionCount(count);
        } else {
          setError("No se pudo obtener el número de envíos.");
        }
      } catch (err) {
        setError("Ocurrió un error inesperado.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissionCount();
  }, [formId]);

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

        {/* Second Card: Nivel (Static Value) */}
        <DashboardCard
          icon={<FaChartBar className="text-green-600 w-6 h-6" />}
          title="Nivel"
          value={2} // TODO: Define formula to calculate level
        />
      </div>

      <div className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Respuesta Sí/No</h2>
        <PieChart data={pieData} />
      </div>
      <div className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">
          Distribución por Categoría
        </h2>
        <Histogram data={histogramData} keys={keys} indexBy={indexBy} />
      </div>
    </div>
  );
};

export default Dashboard4_1;
