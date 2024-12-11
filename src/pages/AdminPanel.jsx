import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { getAllSubmissions } from "../backend/api/allSubmissions";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [openSection, setOpenSection] = useState(null);
  const [openSubmissions, setOpenSubmissions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSectionToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubmissionToggle = (section, id) => {
    setOpenSubmissions((prevState) => ({
      ...prevState,
      [section]: prevState[section] === id ? null : id,
    }));
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
        <Accordion
          key={section}
          open={openSection === section}
          onClick={(e) => {
            e.stopPropagation();
            handleSectionToggle(section);
          }}
          className="border rounded-lg mb-4"
        >
          <AccordionHeader>
            <h2 className="text-xl font-semibold">Sección: {section}</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="space-y-4 ml-6"> {/* Add indentation for submissions */}
              {submissions.map((submission) => (
                <Accordion
                  key={submission.id}
                  open={openSubmissions[section] === submission.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmissionToggle(section, submission.id);
                  }}
                  className="border rounded-lg"
                >
                  <AccordionHeader>
                    <div className="flex justify-between w-full">
                      <span className="font-semibold">
                        Usuario:{" "}
                        <span className="font-medium text-lg">
                          {submission.profile?.email || "No Email"}
                        </span>
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(submission.created_at)}
                      </span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">Datos enviados</h3>
                      <table className="min-w-full table-auto">
                        <tbody>
                          {Object.entries(submission.responses || {}).map(
                            ([key, value]) => (
                              <tr key={key} className="border-t">
                                <th className="text-left px-4 py-2 capitalize text-gray-700">
                                  {key}
                                </th>
                                <td className="px-4 py-2 text-gray-600">
                                  {value || "N/A"}
                                </td>
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
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default AdminPanel;
