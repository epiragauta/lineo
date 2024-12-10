export const questions11_9 = [
  
    // Subtítulo: Disponibilidad de Mecanismos de Soporte
    {
      type: "sectionTitle",
      key: "disponibilidad_mecanismos_soporte_11_9",
      title: "Disponibilidad de Mecanismos de Soporte",
    },
  
    // Pregunta de Tipo Ratio: Disponibilidad de mecanismos de soporte
    {
      type: "radio",
      key: "disponibilidad_mecanismos_soporte_pregunta_11_9",
      label: "¿La dependencia encargada de la operación estadística dispone de mecanismos actualizados para brindar soporte a los usuarios de la información estadística?",
      name: "disponibilidad_mecanismos_soporte_pregunta_11_9",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Tipos de Mecanismos de Soporte
    {
      type: "sectionTitle",
      key: "tipos_mecanismos_soporte_11_9",
      title: "Tipos de Mecanismos de Soporte",
    },
  
    // Pregunta de Tipo Checkbox: Tipos de mecanismos de soporte
    {
      type: "checkbox",
      key: "tipos_mecanismos_soporte_pregunta_11_9",
      label: "¿Cuáles de los siguientes mecanismos de soporte utiliza la dependencia encargada de la operación estadística para atender a los usuarios de la información estadística?",
      name: "tipos_mecanismos_soporte_pregunta_11_9",
      options: [
        "Asistencia telefónica",
        "Correo electrónico",
        "Portal web o herramientas en línea",
        "Sesiones informativas o capacitaciones",
        "Otros (especificar)",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Efectividad del Soporte
    {
      type: "sectionTitle",
      key: "efectividad_soporte_11_9",
      title: "Efectividad del Soporte",
    },
  
    // Pregunta de Tipo Range: Efectividad del soporte
    {
      type: "slider",
      key: "efectividad_soporte_pregunta_11_9",
      label: "¿Qué tan efectiva es la dependencia encargada de la operación estadística en brindar soporte a los usuarios de la información estadística? Califique (1-5)",
      name: "efectividad_soporte_pregunta_11_9",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Subtítulo: Actualización de los Mecanismos de Soporte
    {
      type: "sectionTitle",
      key: "actualizacion_mecanismos_soporte_11_9",
      title: "Actualización de los Mecanismos de Soporte",
    },
  
    // Pregunta de Tipo Ratio: Revisión y actualización de mecanismos de soporte
    {
      type: "radio",
      key: "revision_actualizacion_mecanismos_soporte_pregunta_11_9",
      label: "¿La dependencia encargada de la operación estadística revisa y actualiza regularmente los mecanismos de soporte para garantizar su efectividad y pertinencia?",
      name: "revision_actualizacion_mecanismos_soporte_pregunta_11_9",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Satisfacción del Usuario
    {
      type: "sectionTitle",
      key: "satisfaccion_usuario_11_9",
      title: "Satisfacción del Usuario",
    },
  
    // Pregunta de Tipo Range: Satisfacción del usuario con el soporte
    {
      type: "slider",
      key: "satisfaccion_usuario_pregunta_11_9",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la satisfacción de los usuarios con respecto al soporte brindado para la información estadística? Califique (1-5)",
      name: "satisfaccion_usuario_pregunta_11_9",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Pregunta de Tipo Text Area: Sugerencias
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_9",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_9",
      initialValue: "",
    },
  
    // Evidencias Documentales para Soporte a usuarios de la información estadística
    {
      type: "evidencias",
      key: "evidencias_soporte_usuarios_info_estadistica_11_9",
      namePrefix: "soporte_usuarios_info_estadistica_11_9",
      fields: [
        { name: "soporte_usuarios_info_estadistica_evidencia1_11_9", initialValue: "" },
        { name: "soporte_usuarios_info_estadistica_evidencia2_11_9", initialValue: "" },
        { name: "soporte_usuarios_info_estadistica_evidencia3_11_9", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_9",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_9",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  