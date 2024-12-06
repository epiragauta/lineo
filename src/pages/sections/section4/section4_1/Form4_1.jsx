// ./src/pages/Sections/Section4/Form4_1.js

import React, { useContext } from "react";
import { questions4_1 as form4_1Questions } from "./questions4_1"; // Importación del arreglo de componentes
import { operationQuestions } from "../../../../questions/operation_questions"; // Importación del arreglo de componentes
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente
import useFormPersistence from "../../../../hooks/useFormPersistence";
import { AuthContext } from "../../../../context/AuthContext";
import { supabase } from "../../../../backend/supabaseClient";
import { toast } from 'react-toastify'; // Import toast from React Toastify

const Form4_1 = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const userId = user ? user.id : null;

  const localStorageKey = "Form4_1";

  const initialFormData = {
    // Initialize all form fields
    nombreOperacion: "",
    dependencia: "",
    registroAdmin: "",
    objetivo: "",
    poblacion: "",
    anioInicio: "",
    areaTematica: "",
    periodicidad: "",
    unidadEstudio: "",
    variablesPrincipales: "",
    coberturaGeografica: "",
    periodoReferencia: "",
    metodoRecoleccion: "",

    respRecursosPregunta1: 1,
    respRecursosPregunta2: [],
    respRecursosEvidencia1: "",
    respRecursosEvidencia2: "",
    respRecursosEvidencia3: "",

    respMejoraPregunta1: 1,
    evaluacionPregunta1: 2,
    respMejoraEvidencia1: "",
    respMejoraEvidencia2: "",
    respMejoraEvidencia3: "",

    asignacionPregunta1: 1,
    asignacionPregunta2: [],
    asignacionEvidencia1: "",
    asignacionEvidencia2: "",
    asignacionEvidencia3: "",

    evaluacionPregunta2: 2,
    evaluacionEvidencia1: "",
    evaluacionEvidencia2: "",
    evaluacionEvidencia3: "",

    sugerenciasComentario: "",
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
  };

  const [formData, setFormData] = useFormPersistence(
    localStorageKey,
    initialFormData,
    userId
  );

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario 4.1 enviado", formData);

    if (!userId) {
      // Replace alert with toast.error in Spanish
      toast.error("Usuario no autenticado. Por favor, inicia sesión.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('submissions')
        .insert([
          {
            user_id: userId,
            form_id: 'form4_1',
            responses: formData,
          },
        ]);

      if (error) {
        throw error;
      }

      console.log("Form submitted successfully:", data);
      // Replace alert with toast.success in Spanish
      toast.success("Formulario enviado exitosamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Optionally, clear the form or redirect the user
      setFormData(initialFormData); // Reset form data
      // Or navigate to another page using useHistory or similar
    } catch (error) {
      console.error("Error submitting form:", error);
      // Replace alert with toast.error in Spanish
      toast.error("Hubo un error al enviar el formulario. Inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const mainTitle = "Sección 4.1 - Responsabilidades de la Alta Dirección";

  const introductions = [
    "Introducción",
    "La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(
        formData,
        handleChange,
        handleSelectChange
      )}
      formQuestions={form4_1Questions(
        formData,
        handleChange,
        handleSelectChange
      )}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_1;
