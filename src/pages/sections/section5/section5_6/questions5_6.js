export const questions5_6 = [
  // Subtítulo: Verificación de Existencia de Información Estadística
  // Pregunta de Tipo Radio: Verificación de Información Estadística
  {
    type: "radio",
    key: "verificacion_existencia_info_estadistica_pregunta",
    label: "¿La dependencia verifica la existencia de información estadística en el Sistema Estadístico Nacional que satisfaga las necesidades identificadas?",
    name: "verificacion_existencia_info_estadistica_pregunta",
    options: ["Sí", "No"],
    initialValue: "Sí", // Puedes ajustar este valor si hay un valor predeterminado
  },
  
  // Pregunta de Tipo Radio: Evitar Producción de Información Duplicada
  {
    type: "radio",
    key: "evita_produccion_informacion_duplica_pregunta",
    label: "Si la respuesta es Sí, ¿se asegura que no se produzca información estadística que ya sea generada por otras entidades?",
    name: "evita_produccion_informacion_duplica_pregunta",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },
  
  // Evidencias Documentales para Verificación de Información Estadística
  {
    type: "evidencias",
    key: "verificacion_existencia_info_estadistica_evidencias",
    namePrefix: "verificacion_existencia_info_estadistica",
    fields: [
      { name: "verificacion_existencia_info_estadistica_evidencia1", initialValue: "" },
      { name: "verificacion_existencia_info_estadistica_evidencia2", initialValue: "" },
      { name: "verificacion_existencia_info_estadistica_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Determinación de Fuentes de Datos
  {
    type: "sectionTitle",
    key: "determinacion_fuentes_datos",
    title: "Determinación de Fuentes de Datos",
  },
  
  // Pregunta de Tipo Radio: Determinación de Fuentes de Datos
  {
    type: "radio",
    key: "determinacion_fuentes_datos_pregunta",
    label: "¿La dependencia determina las fuentes de datos a utilizar para la generación de información estadística?",
    name: "determinacion_fuentes_datos_pregunta",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },
  
  // Pregunta de Tipo Checkbox: Utilización de Fuentes de Datos
  {
    type: "checkbox",
    key: "fuentes_datos_utiliza",
    label: "Si la respuesta es Sí, ¿utiliza alguna de las siguientes fuentes? Seleccione todas las que considere.",
    name: "fuentes_datos_utiliza",
    options: [
      "Archivos de datos provenientes de registros administrativos",
      "Operaciones estadísticas",
      "Fuentes alternativas de datos",
    ],
    initialValue: [], // Array vacío como valor inicial
  },
  
  // Evidencias Documentales para Determinación de Fuentes de Datos
  {
    type: "evidencias",
    key: "determinacion_fuentes_datos_evidencias",
    namePrefix: "determinacion_fuentes_datos",
    fields: [
      { name: "determinacion_fuentes_datos_evidencia1", initialValue: "" },
      { name: "determinacion_fuentes_datos_evidencia2", initialValue: "" },
      { name: "determinacion_fuentes_datos_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Comprobación de Archivos de Datos
  {
    type: "sectionTitle",
    key: "comprobacion_archivos_datos",
    title: "Comprobación de Archivos de Datos",
  },
  
  // Preguntas de Tipo Slider: Diferentes Aspectos de los Archivos de Datos
  {
    type: "slider",
    key: "comprobacion_archivos_datos_identificacion_interaccion_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Identificación e interacción con los generadores de los archivos de datos?",
    name: "comprobacion_archivos_datos_identificacion_interaccion_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_utilidad_variables_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Utilidad de las variables de interés y los conceptos?",
    name: "comprobacion_archivos_datos_utilidad_variables_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_homologacion_unidades_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Homologación de las unidades de medida de las variables?",
    name: "comprobacion_archivos_datos_homologacion_unidades_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_desagregacion_geografica_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Nivel de desagregación geográfica del archivo de datos?",
    name: "comprobacion_archivos_datos_desagregacion_geografica_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_relevancia_datos_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Relevancia de los datos contenidos en los archivos?",
    name: "comprobacion_archivos_datos_relevancia_datos_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_alcance_variables_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Alcance y variables aprovechables para la producción?",
    name: "comprobacion_archivos_datos_alcance_variables_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_ausencia_duplicidad_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Ausencia de duplicidad de datos?",
    name: "comprobacion_archivos_datos_ausencia_duplicidad_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_transmision_oportuna_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Transmisión oportuna de las variables de interés?",
    name: "comprobacion_archivos_datos_transmision_oportuna_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_capacidades_tecnologicas_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Capacidades tecnológicas para transmitir, cargar, almacenar y procesar datos?",
    name: "comprobacion_archivos_datos_capacidades_tecnologicas_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  {
    type: "slider",
    key: "comprobacion_archivos_datos_confidencialidad_pregunta",
    label: "Califique (1-5) ¿Qué tan efectiva es la dependencia encargada en Confidencialidad, disponibilidad y protección de los datos?",
    name: "comprobacion_archivos_datos_confidencialidad_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  
  // Evidencias Documentales para Comprobación de Archivos de Datos
  {
    type: "evidencias",
    key: "comprobacion_archivos_datos_evidencias",
    namePrefix: "comprobacion_archivos_datos",
    fields: [
      { name: "comprobacion_archivos_datos_evidencia1", initialValue: "" },
      { name: "comprobacion_archivos_datos_evidencia2", initialValue: "" },
      { name: "comprobacion_archivos_datos_evidencia3", initialValue: "" },
    ],
  },

  // Pregunta de Tipo Sugerencias: Mejorar Comprobación de Disponibilidad de Datos
  {
    type: "sugerencias",
    key: "mejorar_comprobacion_disponibilidad_datos_pregunta",
    label: "¿Tiene alguna sugerencia sobre cómo mejorar la comprobación de disponibilidad de datos?",
    name: "mejorar_comprobacion_disponibilidad_datos_pregunta",
    initialValue: "",
  },

  // Subtítulo: Acciones Requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_5_6",
    title: "Acciones requeridas",
  },
  
  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_5_6",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
