export const questions6_8 = [

    // Subtítulo: Estrategia de Difusión
    {
      type: "sectionTitle",
      key: "estrategia_difusion",
      title: "Estrategia de Difusión",
    },
    
    // Pregunta de Tipo Range: Estrategia de Difusión
    {
      type: "slider",
      key: "estrategia_difusion_pregunta",
      label: "¿La dependencia encargada de la operación estadística ha determinado y documentado una estrategia de difusión de los resultados que considere los siguientes aspectos?:",
      name: "estrategia_difusion_pregunta",
      options: {
        a: "Cuadros de salida y productos a difundir conforme a las necesidades de los usuarios y el objetivo de la operación estadística",
        b: "Calendario de difusión",
        c: "Actividades para la difusión",
        d: "Forma de presentación de la información estadística",
        e: "Instrucciones para la lectura, interpretación y uso de la información",
        f: "Canales y medios de difusión",
        g: "Metadatos de la operación estadística",
        h: "Asesoría a usuarios de la información estadística",
      },
      initialValue: "",
    },
    
    // Evidencias Documentales para Estrategia de Difusión
    {
      type: "evidencias",
      key: "estrategia_difusion_evidencias",
      namePrefix: "estrategia_difusion",
      fields: [
        { name: "estrategia_difusion_evidencia1", initialValue: "" },
        { name: "estrategia_difusion_evidencia2", initialValue: "" },
        { name: "estrategia_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Productos y Medios de Difusión
    {
      type: "sectionTitle",
      key: "productos_medios_difusion",
      title: "Productos y Medios de Difusión",
    },
    
    // Pregunta de Tipo Checkbox: Tipos de Productos y Medios de Difusión
    {
      type: "checkbox",
      key: "tipos_productos_medios_difusion_pregunta",
      label: "¿Qué tipos de productos y medios de difusión utiliza la dependencia encargada de la operación estadística para la difusión de los resultados?",
      name: "tipos_productos_medios_difusion_pregunta",
      options: [
        "Informes",
        "Boletines",
        "Sistemas de consulta",
        "Mapas temáticos",
        "Geoservicios",
        "Productos impresos",
        "Sitio web",
        "Correo electrónico",
        "Medio electrónico",
        "Radio",
        "Internet",
        "Televisión",
        "Prensa",
        "Aplicaciones informáticas (celular, computador)",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Productos y Medios de Difusión
    {
      type: "evidencias",
      key: "productos_medios_difusion_evidencias",
      namePrefix: "productos_medios_difusion",
      fields: [
        { name: "productos_medios_difusion_evidencia1", initialValue: "" },
        { name: "productos_medios_difusion_evidencia2", initialValue: "" },
        { name: "productos_medios_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación de la Estrategia de Difusión
    {
      type: "sectionTitle",
      key: "documentacion_estrategia_difusion",
      title: "Documentación de la Estrategia de Difusión",
    },
    
    // Pregunta de Tipo Range: Efectividad en la Documentación de la Estrategia de Difusión
    {
      type: "slider",
      key: "efectividad_documentacion_estrategia_difusion_pregunta",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en documentar la estrategia de difusión de los resultados?",
      name: "efectividad_documentacion_estrategia_difusion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Documentación de la Estrategia de Difusión
    {
      type: "evidencias",
      key: "documentacion_estrategia_difusion_evidencias",
      namePrefix: "documentacion_estrategia_difusion",
      fields: [
        { name: "documentacion_estrategia_difusion_evidencia1", initialValue: "" },
        { name: "documentacion_estrategia_difusion_evidencia2", initialValue: "" },
        { name: "documentacion_estrategia_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Implementación de Actividades de Difusión
    {
      type: "sectionTitle",
      key: "implementacion_actividades_difusion",
      title: "Implementación de Actividades de Difusión",
    },
    
    // Pregunta de Tipo Range: Implementación de Actividades de Difusión
    {
      type: "slider",
      key: "implementacion_actividades_difusion_pregunta",
      label: "Califique de 1-5. ¿En qué medida la dependencia encargada de la operación estadística implementa las actividades planificadas para la difusión de la información estadística?",
      name: "implementacion_actividades_difusion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Implementación de Actividades de Difusión
    {
      type: "evidencias",
      key: "implementacion_actividades_difusion_evidencias",
      namePrefix: "implementacion_actividades_difusion",
      fields: [
        { name: "implementacion_actividades_difusion_evidencia1", initialValue: "" },
        { name: "implementacion_actividades_difusion_evidencia2", initialValue: "" },
        { name: "implementacion_actividades_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Revisión y Actualización de la Estrategia de Difusión
    {
      type: "sectionTitle",
      key: "revision_actualizacion_estrategia_difusion",
      title: "Revisión y Actualización de la Estrategia de Difusión",
    },
    
    // Pregunta de Tipo Text Area: Revisión y Actualización de la Estrategia de Difusión
    {
      type: "textarea",
      key: "revision_actualizacion_estrategia_difusion_pregunta",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la revisión y actualización periódica de la estrategia de difusión de acuerdo con las necesidades de los usuarios y los objetivos de la operación estadística?",
      name: "revision_actualizacion_estrategia_difusion_pregunta",
      initialValue: "",
    },
    
    // Evidencias Documentales para Revisión y Actualización de la Estrategia de Difusión
    {
      type: "evidencias",
      key: "revision_actualizacion_estrategia_difusion_evidencias",
      namePrefix: "revision_actualizacion_estrategia_difusion",
      fields: [
        { name: "revision_actualizacion_estrategia_difusion_evidencia1", initialValue: "" },
        { name: "revision_actualizacion_estrategia_difusion_evidencia2", initialValue: "" },
        { name: "revision_actualizacion_estrategia_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Calendario de Difusión
    {
      type: "sectionTitle",
      key: "calendario_difusion",
      title: "Calendario de Difusión",
    },
    
    // Pregunta de Tipo Text Area: Calendario de Difusión
    {
      type: "textarea",
      key: "calendario_difusion_pregunta",
      label: "¿Cómo socializa la dependencia encargada de la operación estadística la publicación del calendario de difusión y cuál es su periodicidad?",
      name: "calendario_difusion_pregunta",
      initialValue: "",
    },
    
    // Evidencias Documentales para Calendario de Difusión
    {
      type: "evidencias",
      key: "calendario_difusion_evidencias",
      namePrefix: "calendario_difusion",
      fields: [
        { name: "calendario_difusion_evidencia1", initialValue: "" },
        { name: "calendario_difusion_evidencia2", initialValue: "" },
        { name: "calendario_difusion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño de la Difusión
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_difusion",
      title: "Sugerencias para la mejora del Diseño de la Difusión",
    },
    
    // Pregunta de Tipo Text Area: Sugerencias para la mejora del Diseño de la Difusión
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_difusion_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño de la difusión en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_difusion_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_8",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_8",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  