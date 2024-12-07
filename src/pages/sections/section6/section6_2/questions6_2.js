export const questions6_2 = [
  {
    type: "sectionTitle",
    key: "calidad_datos",
    title: "Calidad de los Datos",
  },
  
  // Pregunta de Tipo Radio: ¿Utiliza fuentes secundarias?
  {
    type: "radio",
    key: "utiliza_fuentes_secundarias_pregunta",
    label: "¿Utiliza fuentes secundarias?",
    name: "utiliza_fuentes_secundarias_pregunta",
    options: ["Sí", "No"],
    initialValue: "",
  },
  
  // Pregunta de Tipo Radio: Consideración de la Calidad de los Datos
  {
    type: "radio",
    key: "considera_calidad_datos_pregunta",
    label: "Si la respuesta es Sí, ¿La operación estadística considera la calidad de los datos (completitud y consistencia entre variables) cuando utiliza fuentes secundarias?",
    name: "considera_calidad_datos_pregunta",
    options: ["Sí", "No"],
    initialValue: "",
  },
  
  // Pregunta de Tipo Checkbox: Aspectos de la Calidad Evaluados
  {
    type: "checkbox",
    key: "aspectos_calidad_evaluados_pregunta",
    label: "¿Qué aspectos de la calidad se evalúan? Seleccione todas las opciones que correspondan.",
    name: "aspectos_calidad_evaluados_pregunta",
    options: [
      "completitud de los datos",
      "consistencia entre variables",
      "otros aspectos",
    ],
    initialValue: [],
  },
  
  // Evidencias Documentales para Calidad de los Datos
  {
    type: "evidencias",
    key: "calidad_datos_evidencias",
    namePrefix: "calidad_datos",
    fields: [
      { name: "calidad_datos_evidencia1", initialValue: "" },
      { name: "calidad_datos_evidencia2", initialValue: "" },
      { name: "calidad_datos_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Confirmar el Tipo de Fuente de Datos
  {
    type: "sectionTitle",
    key: "confirmar_tipo_fuente_datos",
    title: "Confirmar el Tipo de Fuente de Datos",
  },
  
  // Pregunta de Tipo Sugerencias: Mejorar la Determinación y Confirmación del Tipo de Fuente de Datos
  {
    type: "sugerencias",
    key: "mejorar_determinacion_confirmacion_fuente_datos_pregunta",
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
    name: "mejorar_determinacion_confirmacion_fuente_datos_pregunta",
    initialValue: "",
  },
  
  // Subtítulo: Acciones Requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_6_2",
    title: "Acciones requeridas",
  },
  
  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_6_2",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
