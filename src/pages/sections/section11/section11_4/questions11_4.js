export const questions11_4 = [
    // Título de la Sección 11.4
    {
      type: "sectionTitle",
      key: "titulo_seccion_11_4",
      title: "Sección 11.4 - Continuidad de la operación estadística",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_11_4",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_11_4",
      content:
        "La difusión de la continuidad de la operación estadística es un aspecto clave para asegurar la transparencia y accesibilidad de los procesos estadísticos, conforme a los lineamientos establecidos en la NTC PE 1000:2020. Esta fase implica la comunicación clara y oportuna sobre el estado y los avances de la operación estadística, garantizando que los usuarios y partes interesadas estén informados sobre cualquier actualización, ajuste o cambio relevante en el desarrollo de la operación. Además, se requiere un monitoreo constante para asegurar que la difusión de la información mantenga su coherencia, calidad y pertinencia a lo largo del ciclo de la operación.",
    },
  
    // Subtítulo: Conservación de Series Históricas o de Tiempo
    {
      type: "sectionTitle",
      key: "conservacion_series_historicas_tiempo_11_4",
      title: "Conservación de Series Históricas o de Tiempo",
    },
  
    // Pregunta de Tipo Ratio: Conservación adecuada de series históricas o de tiempo
    {
      type: "radio",
      key: "conservacion_series_historicas_tiempo_pregunta_11_4",
      label: "¿La dependencia encargada de la operación estadística garantiza la conservación adecuada de las series históricas o de tiempo asociadas a la operación estadística?",
      name: "conservacion_series_historicas_tiempo_pregunta_11_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Conservación de Metadatos
    {
      type: "sectionTitle",
      key: "conservacion_metadatos_11_4",
      title: "Conservación de Metadatos",
    },
  
    // Pregunta de Tipo Ratio: Conservación continua y actualizada de metadatos
    {
      type: "radio",
      key: "conservacion_metadatos_continua_actualizada_pregunta_11_4",
      label: "¿La dependencia encargada de la operación estadística conserva los metadatos de manera continua, asegurando que estén disponibles y actualizados?",
      name: "conservacion_metadatos_continua_actualizada_pregunta_11_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Conservación de Resultados Difundidos
    {
      type: "sectionTitle",
      key: "conservacion_resultados_difundidos_11_4",
      title: "Conservación de Resultados Difundidos",
    },
  
    // Pregunta de Tipo Ratio: Conservación efectiva de resultados difundidos
    {
      type: "radio",
      key: "conservacion_resultados_difundidos_pregunta_11_4",
      label: "¿La dependencia encargada de la operación estadística conserva los resultados difundidos de manera efectiva, permitiendo su consulta en el tiempo?",
      name: "conservacion_resultados_difundidos_pregunta_11_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Eficacia en la Continuidad de la Información
    {
      type: "sectionTitle",
      key: "eficacia_continuidad_informacion_11_4",
      title: "Eficacia en la Continuidad de la Información",
    },
  
    // Pregunta de Tipo Range: Efectividad en la conservación de series históricas, metadatos y resultados difundidos
    {
      type: "range",
      key: "efectividad_continuidad_informacion_pregunta_11_4",
      label: "Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en conservar las series históricas, metadatos y resultados difundidos, asegurando la continuidad de la operación estadística.",
      name: "efectividad_continuidad_informacion_pregunta_11_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_4",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_4",
      initialValue: "",
    },
  
    // Evidencias Documentales para Continuidad de la operación estadística
    {
      type: "evidencias",
      key: "evidencias_continuidad_operacion_estadistica_11_4",
      namePrefix: "continuidad_operacion_estadistica_11_4",
      fields: [
        { name: "continuidad_operacion_estadistica_evidencia1_11_4", initialValue: "" },
        { name: "continuidad_operacion_estadistica_evidencia2_11_4", initialValue: "" },
        { name: "continuidad_operacion_estadistica_evidencia3_11_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_4",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_4",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  