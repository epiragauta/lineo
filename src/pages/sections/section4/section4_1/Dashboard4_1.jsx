// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from 'react';
import { getNumberOfSubmissions } from '../../../../backend/api/numberOfSubmissions';
import { FaClipboardList, FaChartBar } from 'react-icons/fa'; // Example icons
import DashboardCard from '../../../../components/DashboardCard'; // Import DashboardCard

const Dashboard4_1 = ({ subsection, label }) => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formId = subsection; 

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
          value={2} // Static value as per your example
        />
      </div>
    </div>
  );
};

export default Dashboard4_1;
