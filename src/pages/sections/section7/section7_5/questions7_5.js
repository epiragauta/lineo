export const questions7_5 = [
    // Subtítulo: Elaboración de Productos Cartográficos
    {
      type: "sectionTitle",
      key: "elaboracion_productos_cartograficos_7_5",
      title: "Elaboración de Productos Cartográficos",
    },
  
    // Pregunta de Tipo Radio: Generación de productos cartográficos
    {
      type: "radio",
      key: "generacion_productos_cartograficos_pregunta_7_5",
      label: "¿La operación estadística genera los productos cartográficos necesarios para la recolección de acuerdo con lo diseñado?",
      name: "generacion_productos_cartograficos_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Preguntas de Tipo Radio: Si la respuesta es Sí, los productos incluyen:
    {
      type: "radio",
      key: "productos_cartograficos_mapas_detallados_pregunta_7_5",
      label: "a) mapas detallados para la recolección",
      name: "productos_cartograficos_mapas_detallados_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
    {
      type: "radio",
      key: "productos_cartograficos_integracion_marco_geoestadistico_pregunta_7_5",
      label: "b) integración con el marco geoestadístico nacional",
      name: "productos_cartograficos_integracion_marco_geoestadistico_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Evidencias Documentales para Elaboración de Productos Cartográficos
    {
      type: "evidencias",
      key: "evidencias_elaboracion_productos_cartograficos_7_5",
      namePrefix: "elaboracion_productos_cartograficos_7_5",
      fields: [
        { name: "elaboracion_productos_cartograficos_evidencia1_7_5", initialValue: "" },
        { name: "elaboracion_productos_cartograficos_evidencia2_7_5", initialValue: "" },
        { name: "elaboracion_productos_cartograficos_evidencia3_7_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Construcción de Rutas de Recolección
    {
      type: "sectionTitle",
      key: "construccion_rutas_recoleccion_7_5",
      title: "Construcción de Rutas de Recolección",
    },
  
    // Pregunta de Tipo Radio: Construcción de rutas de recolección
    {
      type: "radio",
      key: "construccion_rutas_recoleccion_pregunta_7_5",
      label: "¿La operación estadística construye las rutas de recolección sobre los productos cartográficos utilizando el marco geoestadístico nacional?",
      name: "construccion_rutas_recoleccion_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Text Area: Aseguramiento de conformidad con el marco geoestadístico
    {
      type: "textarea",
      key: "aseguramiento_conformidad_marco_geoestadistico_pregunta_7_5",
      label: "Si la respuesta es Sí, ¿cómo se asegura la conformidad con el marco geoestadístico?",
      name: "aseguramiento_conformidad_marco_geoestadistico_pregunta_7_5",
      initialValue: "",
    },
  
    // Evidencias Documentales para Construcción de Rutas de Recolección
    {
      type: "evidencias",
      key: "evidencias_construccion_rutas_recoleccion_7_5",
      namePrefix: "construccion_rutas_recoleccion_7_5",
      fields: [
        { name: "construccion_rutas_recoleccion_evidencia1_7_5", initialValue: "" },
        { name: "construccion_rutas_recoleccion_evidencia2_7_5", initialValue: "" },
        { name: "construccion_rutas_recoleccion_evidencia3_7_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Elaboración de Formatos de Control y Supervisión
    {
      type: "sectionTitle",
      key: "elaboracion_formatos_control_supervision_7_5",
      title: "Elaboración de Formatos de Control y Supervisión",
    },
  
    // Pregunta de Tipo Radio: Elaboración de formatos de control y supervisión
    {
      type: "radio",
      key: "elaboracion_formatos_control_supervision_pregunta_7_5",
      label: "¿La operación estadística elabora los formatos de control y supervisión conforme a lo diseñado?",
      name: "elaboracion_formatos_control_supervision_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Text Area: Tipos de formatos utilizados para control y supervisión
    {
      type: "textarea",
      key: "tipos_formatos_control_supervision_pregunta_7_5",
      label: "Si la respuesta es Sí, ¿qué tipos de formatos se utilizan para el control y supervisión?",
      name: "tipos_formatos_control_supervision_pregunta_7_5",
      initialValue: "",
    },
  
    // Evidencias Documentales para Elaboración de Formatos de Control y Supervisión
    {
      type: "evidencias",
      key: "evidencias_elaboracion_formatos_control_supervision_7_5",
      namePrefix: "elaboracion_formatos_control_supervision_7_5",
      fields: [
        { name: "elaboracion_formatos_control_supervision_evidencia1_7_5", initialValue: "" },
        { name: "elaboracion_formatos_control_supervision_evidencia2_7_5", initialValue: "" },
        { name: "elaboracion_formatos_control_supervision_evidencia3_7_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sensibilización y Entrenamiento
    {
      type: "sectionTitle",
      key: "sensibilizacion_entrenamiento_7_5",
      title: "Sensibilización y Entrenamiento",
    },
  
    // Pregunta de Tipo Radio: Elaboración de productos para sensibilización y materiales para entrenamiento
    {
      type: "radio",
      key: "elaboracion_productos_sensibilizacion_entrenamiento_pregunta_7_5",
      label: "¿La operación estadística elabora productos para la sensibilización y materiales para el entrenamiento del personal encargado de la recolección o el acopio?",
      name: "elaboracion_productos_sensibilizacion_entrenamiento_pregunta_7_5",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Checkbox: Productos elaborados para sensibilización y entrenamiento
    {
      type: "checkbox",
      key: "productos_sensibilizacion_entrenamiento_pregunta_7_5",
      label: "Si la respuesta es Sí, ¿cuáles de los siguientes productos se elaboran para estos fines? Seleccione todas las opciones que correspondan.",
      name: "productos_sensibilizacion_entrenamiento_pregunta_7_5",
      options: [
        "folletos",
        "presentaciones",
        "aplicaciones (e learning, b learning)",
        "talleres",
        "simulaciones",
        "pruebas",
        "evaluaciones",
        "ayudas pedagógicas",
        "manuales de instrucción",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Sensibilización y Entrenamiento
    {
      type: "evidencias",
      key: "evidencias_sensibilizacion_entrenamiento_7_5",
      namePrefix: "sensibilizacion_entrenamiento_7_5",
      fields: [
        { name: "sensibilizacion_entrenamiento_evidencia1_7_5", initialValue: "" },
        { name: "sensibilizacion_entrenamiento_evidencia2_7_5", initialValue: "" },
        { name: "sensibilizacion_entrenamiento_evidencia3_7_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora de la Elaboración de Materiales para la Recolección o acopio
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_elaboracion_materiales_recoleccion_acopio_7_5",
      title: "Sugerencias para la mejora de la Elaboración de Materiales para la Recolección o acopio",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_elaboracion_materiales_recoleccion_acopio_pregunta_7_5",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_elaboracion_materiales_recoleccion_acopio_pregunta_7_5",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_5",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_5",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  