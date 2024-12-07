export const questions11_1 = [
    // Título de la Sección 11.1
    {
      type: "sectionTitle",
      key: "titulo_seccion_11_1",
      title: "Sección 11.1 - Productos, canales y medios de difusión",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_11_1",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_11_1",
      content:
        "La difusión de productos estadísticos es un proceso clave para asegurar que la información generada sea accesible y útil para los usuarios finales. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta etapa involucra la selección adecuada de canales y medios de difusión, garantizando que los productos sean distribuidos de manera efectiva y oportuna. La norma establece que la información debe ser accesible a través de plataformas digitales, como sitios web institucionales, bases de datos abiertas y servicios de datos en línea, además de considerar otros medios tradicionales cuando sea necesario. Es esencial que la difusión de productos cumpla con los principios de transparencia y claridad, permitiendo a los usuarios interpretar correctamente los datos y tomar decisiones informadas.",
    },
  
    // Subtítulo: Difusión de Información Estadística
    {
      type: "sectionTitle",
      key: "difusion_informacion_estadistica_11_1",
      title: "Difusión de Información Estadística",
    },
  
    // Pregunta de Tipo Range: Efectividad en la difusión de productos estadísticos
    {
      type: "range",
      key: "efectividad_difusion_productos_estadisticos_pregunta_11_1",
      label: "Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en generar, promocionar y gestionar los productos estadísticos para la difusión",
      name: "efectividad_difusion_productos_estadisticos_pregunta_11_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Calidad de los Productos de Difusión
    {
      type: "sectionTitle",
      key: "calidad_productos_difusion_11_1",
      title: "Calidad de los Productos de Difusión",
    },
  
    // Pregunta de Tipo Range: Calidad de los productos de difusión
    {
      type: "range",
      key: "calidad_productos_difusion_pregunta_11_1",
      label: "Califique (1-5) en qué medida la dependencia encargada de la operación estadística genera productos estadísticos adecuados para la difusión, tales como cuadros de salida, series históricas, macrodatos y documentos de referencia.",
      name: "calidad_productos_difusion_pregunta_11_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Uso de Herramientas de Visualización
    {
      type: "sectionTitle",
      key: "uso_herramientas_visualizacion_11_1",
      title: "Uso de Herramientas de Visualización",
    },
  
    // Pregunta de Tipo Text Area: Evaluación del uso de herramientas de visualización
    {
      type: "textArea",
      key: "evaluacion_uso_herramientas_visualizacion_pregunta_11_1",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística el uso y la efectividad de las herramientas de visualización de datos, como mapas temáticos, geoportales y cuadros de mando, en la difusión de la información estadística?",
      name: "evaluacion_uso_herramientas_visualizacion_pregunta_11_1",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_1",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Productos, canales y medios de difusión
    {
      type: "evidencias",
      key: "evidencias_productos_canales_medios_difusion_11_1",
      namePrefix: "productos_canales_medios_difusion_11_1",
      fields: [
        { name: "productos_canales_medios_difusion_evidencia1_11_1", initialValue: "" },
        { name: "productos_canales_medios_difusion_evidencia2_11_1", initialValue: "" },
        { name: "productos_canales_medios_difusion_evidencia3_11_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_1",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_1",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  