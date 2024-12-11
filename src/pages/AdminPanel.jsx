// src/components/AdminPanel.jsx

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { getAllSubmissions } from "../backend/api/allSubmissions";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [open, setOpen] = useState(null); // Track which accordion is open
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOpen = (id) => {
    setOpen(open === id ? null : id); // Toggle open accordion
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const data = await getAllSubmissions();
        if (data) {
          setSubmissions(data);
        } else {
          setError("Failed to fetch submissions.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("es-ES", options);
  };

  const groupBySection = (data) =>
    data.reduce((acc, submission) => {
      const section = submission.form_id || "Uncategorized";
      if (!acc[section]) acc[section] = [];
      acc[section].push(submission);
      return acc;
    }, {});

  if (loading) {
    return <div className="text-center">Loading submissions...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const groupedSubmissions = groupBySection(submissions);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {Object.entries(groupedSubmissions).map(([section, submissions]) => (
        <div key={section} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{section}</h2>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Accordion
                key={submission.id}
                open={open === submission.id}
                onClick={() => handleOpen(submission.id)}
                className="border rounded-lg"
              >
                <AccordionHeader>
                  <div className="flex justify-between w-full">
                    <span className="font-semibold">
                      Usuario: <span className="font-medium text-lg">
                        {submission.profile.email}
                      </span>
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(submission.created_at)}
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Datos enviados</h3>
                    <table className="min-w-full table-auto">
                      <tbody>
                        {Object.entries(submission.responses || {}).map(
                          ([key, value]) => (
                            <tr key={key} className="border-t">
                              <th className="text-left px-4 py-2 capitalize">
                                {key}
                              </th>
                              <td className="px-4 py-2">{value || "N/A"}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;