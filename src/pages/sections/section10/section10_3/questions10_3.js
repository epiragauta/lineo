export const questions10_3 = [
    // Título de la Sección 10.1
    {
      type: "sectionTitle",
      key: "titulo_seccion_10_1",
      title: "Sección 10.1 - Cálculo de agregaciones (Resultados)",
    },

  
    // Subtítulo: Consistencia de Resultados
    {
      type: "sectionTitle",
      key: "consistencia_resultados_10_1",
      title: "Consistencia de Resultados",
    },
  
    // Pregunta de Tipo Ratio: Consistencia de resultados
    {
      type: "radio",
      key: "consistencia_resultados_pregunta_10_1",
      label: "¿La operación estadística garantiza la consistencia de los resultados obtenidos?",
      name: "consistencia_resultados_pregunta_10_1",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Pregunta de Tipo Text Area: Cómo asegurar la consistencia
    {
      type: "textarea",
      key: "asegurar_consistencia_pregunta_10_1",
      label: "Si la respuesta es Sí, ¿cómo se asegura esta consistencia en los resultados generados?",
      name: "asegurar_consistencia_pregunta_10_1",
      initialValue: "",
    },
  
    // Subtítulo: Documentación de Limitaciones
    {
      type: "sectionTitle",
      key: "documentacion_limitaciones_10_1",
      title: "Documentación de Limitaciones",
    },
  
    // Pregunta de Tipo Ratio: Documentación de limitaciones
    {
      type: "radio",
      key: "documentacion_limitaciones_pregunta_10_1",
      label: "¿La operación estadística documenta adecuadamente las limitaciones de los resultados, teniendo en cuenta las medidas de calidad implementadas?",
      name: "documentacion_limitaciones_pregunta_10_1",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Pregunta de Tipo Checkbox: Medidas de calidad consideradas
    {
      type: "checkbox",
      key: "medidas_calidad_consideradas_pregunta_10_1",
      label: "Si la respuesta es Sí, ¿cuáles de las siguientes medidas de calidad se tienen en cuenta?",
      name: "medidas_calidad_consideradas_pregunta_10_1",
      options: [
        "Tasas de respuesta",
        "Tasas de cobertura",
        "Tasas de imputación",
        "Errores de muestreo",
        "Coeficientes de variación",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Generación de Cuadros de Resultados
    {
      type: "sectionTitle",
      key: "generacion_cuadros_resultados_10_1",
      title: "Generación de Cuadros de Resultados",
    },
  
    // Pregunta de Tipo Range: Efectividad en generación de cuadros
    {
      type: "slider",
      key: "efectividad_generacion_cuadros_pregunta_10_1",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en generar los cuadros de salida o resultados incorporando el cálculo de ponderaciones (cuando aplique)",
      name: "efectividad_generacion_cuadros_pregunta_10_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Anonimización de Microdatos
    {
      type: "sectionTitle",
      key: "anonimizacion_microdatos_10_1",
      title: "Anonimización de Microdatos",
    },
  
    // Pregunta de Tipo Range: Implementación de técnicas de anonimización
    {
      type: "slider",
      key: "implementacion_tecnicas_anonimizacion_pregunta_10_1",
      label: "Califique (1-5) ¿En qué medida la operación estadística implementa las técnicas de anonimización de los microdatos?",
      name: "implementacion_tecnicas_anonimizacion_pregunta_10_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Revisión de Limitaciones y Medidas de Calidad
    {
      type: "sectionTitle",
      key: "revision_limitaciones_medidas_calidad_10_1",
      title: "Revisión de Limitaciones y Medidas de Calidad",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización
    {
      type: "textarea",
      key: "evaluacion_revision_actualizacion_limitaciones_pregunta_10_1",
      label: "¿Cómo evalúa la operación estadística la revisión y actualización de las limitaciones de los resultados, en relación con las medidas de calidad implementadas?",
      name: "evaluacion_revision_actualizacion_limitaciones_pregunta_10_1",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejora de determinación y confirmación de fuentes de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_10_1",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_10_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Cálculo de agregaciones (Resultados)
    {
      type: "evidencias",
      key: "evidencias_calculo_agregaciones_resultados_10_1",
      namePrefix: "calculo_agregaciones_resultados_10_1",
      fields: [
        { name: "calculo_agregaciones_resultados_evidencia1_10_1", initialValue: "" },
        { name: "calculo_agregaciones_resultados_evidencia2_10_1", initialValue: "" },
        { name: "calculo_agregaciones_resultados_evidencia3_10_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_10_1",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_10_1",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  