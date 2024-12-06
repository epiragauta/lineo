// src/pages/sections/section4/section4_1/Dashboard4_1.jsx

import React, { useEffect, useState } from 'react';
import { getNumberOfSubmissions } from '../../../../backend/api/numberOfSubmissions';
import { FaClipboardList } from 'react-icons/fa'; // Example icon for the second card

const Dashboard4_1 = () => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formId = 'form4_1'; // Specify your formId here

  useEffect(() => {
    const fetchSubmissionCount = async () => {
      try {
        const count = await getNumberOfSubmissions(formId);
        if (count !== null) {
          setSubmissionCount(count);
        } else {
          setError("Failed to fetch submission count.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissionCount();
  }, [formId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard 4.1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card: Number of Submissions */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <FaClipboardList className="text-blue-600 w-6 h-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Number of Submissions</p>
            {loading ? (
              <p className="text-lg font-bold text-gray-700">Loading...</p>
            ) : error ? (
              <p className="text-lg font-bold text-red-500">{error}</p>
            ) : (
              <p className="text-2xl font-bold text-gray-800">{submissionCount}</p>
            )}
          </div>
        </div>

        {/* Second Card: Placeholder for Additional Metrics */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center">
          <div className="p-3 bg-green-100 rounded-full">
            <FaClipboardList className="text-green-600 w-6 h-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Additional Metric</p>
            <p className="text-2xl font-bold text-gray-800">--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard4_1;
