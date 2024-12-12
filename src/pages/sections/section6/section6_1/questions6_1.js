export const questions6_1 = [
  
  // Subtítulo: Verificación de Necesidades al Momento del Diseño
  {
    type: "sectionTitle",
    key: "verificacion_necesidades_momento_diseno",
    title: "Verificación de Necesidades al Momento del Diseño",
  },
  
  // Pregunta de Tipo Radio: Verificación de Necesidades al Momento del Diseño
  {
    type: "radio",
    key: "verificacion_necesidades_momento_diseno_pregunta",
    label: "¿La operación estadística verifica que las necesidades de los usuarios se mantengan vigentes al momento de realizar el diseño?",
    name: "verificacion_necesidades_momento_diseno_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Pregunta de Tipo Radio: Verificación de Brecha de Tiempo
  {
    type: "radio",
    key: "verificacion_brecha_tiempo_pregunta",
    label: "Si la respuesta es Sí, ¿La verificación se realiza cuando la brecha de tiempo entre la fase de Detección y Análisis de Necesidades y el inicio del Diseño es amplia?",
    name: "verificacion_brecha_tiempo_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Evidencias Documentales para Verificación de Necesidades al Momento del Diseño
  {
    type: "evidencias",
    key: "verificacion_necesidades_momento_diseno_evidencias",
    namePrefix: "verificacion_necesidades_momento_diseno",
    fields: [
      { name: "verificacion_necesidades_momento_diseno_evidencia1", initialValue: "" },
      { name: "verificacion_necesidades_momento_diseno_evidencia2", initialValue: "" },
      { name: "verificacion_necesidades_momento_diseno_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Mejorar la Verificación de las Necesidades
  {
    type: "sectionTitle",
    key: "mejorar_verificacion_necesidades",
    title: "Mejorar la Verificación de las Necesidades",
  },
  
  // Pregunta de Tipo Sugerencias
  {
    type: "sugerencias",
    key: "mejorar_verificacion_necesidades_pregunta",
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de verificación de la vigencia de las necesidades de los usuarios y la alineación de los objetivos en la operación estadística?",
    name: "mejorar_verificacion_necesidades_pregunta",
    initialValue: "",
  },
  
  // Subtítulo: Acciones Requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_6_1",
    title: "Acciones requeridas",
  },
  
  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_6_1",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
