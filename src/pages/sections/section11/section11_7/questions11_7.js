export const questions11_7 = [
    // Título de la Sección 11.7
    {
      type: "sectionTitle",
      key: "titulo_seccion_11_7",
      title: "Sección 11.7 - Condiciones de uso de la información estadística",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_11_7",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_11_7",
      content:
        "La difusión de las condiciones de uso de la información estadística es un aspecto clave para garantizar la transparencia, la accesibilidad y la correcta utilización de los datos producidos. Según los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica la comunicación clara y detallada de las restricciones, derechos y responsabilidades asociados con el uso de la información estadística. Es esencial que se definan y se difundan de manera oportuna las condiciones de acceso, uso y distribución de los datos, para asegurar que los usuarios comprendan los parámetros legales y éticos que regulan su manejo y para promover una utilización adecuada que respete la confidencialidad y la integridad de los datos.",
    },
  
    // Subtítulo: Descripción de Condiciones de Uso
    {
      type: "sectionTitle",
      key: "descripcion_condiciones_uso_11_7",
      title: "Descripción de Condiciones de Uso",
    },
  
    // Pregunta de Tipo Ratio: Descripción clara de condiciones de uso
    {
      type: "radio",
      key: "descripcion_condiciones_uso_pregunta_11_7",
      label: "¿La dependencia encargada de la operación estadística describe claramente las condiciones de uso de la información estadística difundida?",
      name: "descripcion_condiciones_uso_pregunta_11_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Ratio: Disponibilidad pública de las condiciones de uso
    {
      type: "radio",
      key: "disponibilidad_publica_condiciones_uso_pregunta_11_7",
      label: "Si la respuesta es sí, ¿las condiciones de uso están disponibles públicamente?",
      name: "disponibilidad_publica_condiciones_uso_pregunta_11_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Políticas de Confidencialidad
    {
      type: "sectionTitle",
      key: "politicas_confidencialidad_11_7",
      title: "Políticas de Confidencialidad",
    },
  
    // Pregunta de Tipo Ratio: Cumplimiento de políticas de confidencialidad
    {
      type: "radio",
      key: "cumplimiento_politicas_confidencialidad_pregunta_11_7",
      label: "¿La dependencia encargada de la operación estadística garantiza que la información estadística difundida cumple con las políticas de confidencialidad establecidas?",
      name: "cumplimiento_politicas_confidencialidad_pregunta_11_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Range: Claridad de las políticas de confidencialidad
    {
      type: "range",
      key: "claridad_politicas_confidencialidad_pregunta_11_7",
      label: "Si la respuesta es sí, califique (1-5) el nivel de claridad de las políticas de confidencialidad publicadas.",
      name: "claridad_politicas_confidencialidad_pregunta_11_7",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Acceso a la Información con Restricciones
    {
      type: "sectionTitle",
      key: "acceso_info_restricciones_11_7",
      title: "Acceso a la Información con Restricciones",
    },
  
    // Pregunta de Tipo Ratio: Establecimiento de mecanismos de acceso con restricciones
    {
      type: "radio",
      key: "mecanismos_acceso_restricciones_pregunta_11_7",
      label: "¿La dependencia encargada de la operación estadística establece mecanismos claros para que los usuarios accedan a la información estadística bajo condiciones de uso o restricciones específicas?",
      name: "mecanismos_acceso_restricciones_pregunta_11_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Comunicación de Restricciones a los Usuarios
    {
      type: "sectionTitle",
      key: "comunicacion_restricciones_usuarios_11_7",
      title: "Comunicación de Restricciones a los Usuarios",
    },
  
    // Pregunta de Tipo Range: Efectividad en la comunicación de restricciones
    {
      type: "range",
      key: "efectividad_comunicacion_restricciones_pregunta_11_7",
      label: "¿En qué medida la dependencia encargada de la operación estadística comunica de manera efectiva las restricciones y condiciones de uso de la información estadística a los usuarios? Califique (1-5)",
      name: "efectividad_comunicacion_restricciones_pregunta_11_7",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Revisión y Actualización de Condiciones de Uso
    {
      type: "sectionTitle",
      key: "revision_actualizacion_condiciones_uso_11_7",
      title: "Revisión y Actualización de Condiciones de Uso",
    },
  
    // Pregunta de Tipo Ratio: Revisión y actualización periódica de condiciones de uso
    {
      type: "radio",
      key: "revision_actualizacion_condiciones_uso_pregunta_11_7",
      label: "¿La dependencia encargada de la operación estadística revisa y actualiza periódicamente las condiciones de uso y las políticas de confidencialidad de la información estadística?",
      name: "revision_actualizacion_condiciones_uso_pregunta_11_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_7",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_7",
      initialValue: "",
    },
  
    // Evidencias Documentales para Condiciones de uso de la información estadística
    {
      type: "evidencias",
      key: "evidencias_condiciones_uso_info_estadistica_11_7",
      namePrefix: "condiciones_uso_info_estadistica_11_7",
      fields: [
        { name: "condiciones_uso_info_estadistica_evidencia1_11_7", initialValue: "" },
        { name: "condiciones_uso_info_estadistica_evidencia2_11_7", initialValue: "" },
        { name: "condiciones_uso_info_estadistica_evidencia3_11_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_7",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_7",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  