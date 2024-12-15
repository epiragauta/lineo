// src/components/GeneralForm.jsx

import React, { useContext, useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { supabase } from "../backend/supabaseClient";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { renderQuestions } from "../utils/renderQuestions";
import { operationQuestions } from "../questions/operationQuestions"; 
import { getInitialFormData } from "../utils/getInitialFormData";

/**
 * Generic form component to handle multiple forms with the same structure.
 *
 * @param {string} formId - Unique identifier for the form.
 * @param {string} label - Title of the form.
 * @param {object} initialFormData - Dictionary of initial form data.
 * @param {Array} operationQuestions - Array of operation question components.
 * @param {Array} formQuestions - Array of form question components.
 * @param {Array} introductions - Array of introductions.
 */
const GeneralForm = ({ subsection, label, formQuestions, introductions }) => {
  const { user } = useContext(AuthContext);
  const userId = user ? user.id : null;

  const formId = subsection;
  const initialFormData = getInitialFormData(operationQuestions, formQuestions);

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(true);

  // Función para cargar la respuesta previa del formulario
  const loadSubmission = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("submissions")
        .select("id, responses")
        .eq("form_id", formId)
        .order("created_at", { ascending: false }) // Obtener la más reciente
        .limit(1)
        .single(); // Obtener un solo registro
        
        setFormData(initialFormData);
        
        if (error && error.code !== "PGRST116") { // PGRST116: No rows found
          throw error;
        }
        
        if (data && data.responses) {
          setFormData({
            ...initialFormData,
            ...data.responses,
          });
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching submission:", error);
      toast.error("Hubo un error al cargar los datos previos.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, formId]);

  // Handle changes for text inputs, radio buttons, and checkboxes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const currentValues = formData[name] || [];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle changes for sliders or other custom inputs
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      toast.error("Usuario no autenticado. Por favor, inicia sesión.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const { data, error } = await supabase.from("submissions").insert([
        {
          user_id: userId,
          form_id: formId,
          responses: formData,
        },
      ]);

      if (error) {
        throw error;
      }

      console.log("Form submitted successfully:", data);
      toast.success("Formulario actualizado exitosamente!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Hubo un error al enviar el formulario. Inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  if (loading) {
    return <div>Cargando formulario...</div>;
  }

  const mainTitle = label;

  const operationQuestionsComponents = renderQuestions(operationQuestions, formData, handleChange, handleSelectChange);
  const formQuestionsComponents = renderQuestions(formQuestions, formData, handleChange, handleSelectChange);

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestionsComponents}
      formQuestions={formQuestionsComponents}
      handleSubmit={handleSubmit}
    />
  );
};

export default GeneralForm;
