export const questions6_7 = [
    
    // Subtítulo: Diseño y Documentación de la Metodología de Análisis
    {
      type: "sectionTitle",
      key: "diseno_documentacion_metodologia_analisis",
      title: "Diseño y Documentación de la Metodología de Análisis",
    },
    
    // Pregunta de Tipo Radio: Definición y Documentación de la Metodología de Análisis
    {
      type: "radio",
      key: "definicion_documentacion_metodologia_analisis_pregunta",
      label: "¿La operación estadística define y documenta adecuadamente la metodología para realizar el análisis de la información estadística?",
      name: "definicion_documentacion_metodologia_analisis_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Metodología de Análisis
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_coherencia_est",
      label: "¿Coherencia de las estimaciones?",
      name: "aspectos_metodologia_analisis_coherencia_est",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_correspondencia_comportamiento",
      label: "¿Correspondencia entre el comportamiento del tema objeto de estudio y los resultados obtenidos?",
      name: "aspectos_metodologia_analisis_correspondencia_comportamiento",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_contraste_resultados",
      label: "¿Contraste de los resultados obtenidos con los resultados esperados?",
      name: "aspectos_metodologia_analisis_contraste_resultados",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_verificacion_consistencia",
      label: "¿Verificación de la consistencia interna de las variables?",
      name: "aspectos_metodologia_analisis_verificacion_consistencia",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_identificacion_datos_atipicos",
      label: "¿Identificación, explicación y documentación de los datos atípicos?",
      name: "aspectos_metodologia_analisis_identificacion_datos_atipicos",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_consistencia_coherencia_informacion",
      label: "¿Consistencia y coherencia de la información estadística con series e indicadores históricos?",
      name: "aspectos_metodologia_analisis_consistencia_coherencia_informacion",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_metodologia_analisis_consistencia_georreferenciacion",
      label: "¿Consistencia y coherencia de la georreferenciación de las fuentes?",
      name: "aspectos_metodologia_analisis_consistencia_georreferenciacion",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Diseño y Documentación de la Metodología de Análisis
    {
      type: "evidencias",
      key: "diseno_documentacion_metodologia_analisis_evidencias",
      namePrefix: "diseno_documentacion_metodologia_analisis",
      fields: [
        { name: "diseno_documentacion_metodologia_analisis_evidencia1", initialValue: "" },
        { name: "diseno_documentacion_metodologia_analisis_evidencia2", initialValue: "" },
        { name: "diseno_documentacion_metodologia_analisis_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Determinación de Herramientas Tecnológicas
    {
      type: "sectionTitle",
      key: "determinacion_herramientas_tecnologicas",
      title: "Determinación de Herramientas Tecnológicas",
    },
    
    // Pregunta de Tipo Radio: Determinación de Herramientas Tecnológicas
    {
      type: "radio",
      key: "determinacion_herramientas_tecnologicas_pregunta",
      label: "¿La operación estadística determina las herramientas tecnológicas requeridas para el análisis de la información estadística o geoestadística obtenida?",
      name: "determinacion_herramientas_tecnologicas_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Determinación de Herramientas Tecnológicas
    {
      type: "evidencias",
      key: "determinacion_herramientas_tecnologicas_evidencias",
      namePrefix: "determinacion_herramientas_tecnologicas",
      fields: [
        { name: "determinacion_herramientas_tecnologicas_evidencia1", initialValue: "" },
        { name: "determinacion_herramientas_tecnologicas_evidencia2", initialValue: "" },
        { name: "determinacion_herramientas_tecnologicas_evidencia3", initialValue: "" },
      ],
    },
    
    // Pregunta de Tipo Range: Variables a Anonimizar y Técnicas de Anonimización
    {
      type: "slider",
      key: "variables_anonimizar_tecnicas_anonimizacion_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectivamente determina la operación estadística las variables a anonimizar y las técnicas de anonimización aplicables?",
      name: "variables_anonimizar_tecnicas_anonimizacion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Variables a Anonimizar y Técnicas de Anonimización
    {
      type: "evidencias",
      key: "variables_anonimizar_tecnicas_anonimizacion_evidencias",
      namePrefix: "variables_anonimizar_tecnicas_anonimizacion",
      fields: [
        { name: "variables_anonimizar_tecnicas_anonimizacion_evidencia1", initialValue: "" },
        { name: "variables_anonimizar_tecnicas_anonimizacion_evidencia2", initialValue: "" },
        { name: "variables_anonimizar_tecnicas_anonimizacion_evidencia3", initialValue: "" },
      ],
    },
    
    // Pregunta de Tipo Range: Técnicas de Anonimización Utilizadas
    {
      type: "slider",
      key: "tecnicas_anonimizacion_utilizadas_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectivamente se aplican las técnicas de anonimización utilizadas en la operación estadística para proteger la privacidad de los datos?",
      name: "tecnicas_anonimizacion_utilizadas_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Técnicas de Anonimización Utilizadas
    {
      type: "evidencias",
      key: "tecnicas_anonimizacion_utilizadas_evidencias",
      namePrefix: "tecnicas_anonimizacion_utilizadas",
      fields: [
        { name: "tecnicas_anonimizacion_utilizadas_evidencia1", initialValue: "" },
        { name: "tecnicas_anonimizacion_utilizadas_evidencia2", initialValue: "" },
        { name: "tecnicas_anonimizacion_utilizadas_evidencia3", initialValue: "" },
      ],
    },
    
    // Pregunta de Tipo Range: Coherencia y Consistencia en el Análisis
    {
      type: "slider",
      key: "coherencia_consistencia_analisis_pregunta",
      label: "Califique de 1-5 ¿En qué medida la operación estadística considera aspectos como la coherencia de las estimaciones, la correspondencia entre el comportamiento del tema objeto de estudio y los resultados, y la consistencia interna de las variables en la etapa de análisis?",
      name: "coherencia_consistencia_analisis_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Coherencia y Consistencia en el Análisis
    {
      type: "evidencias",
      key: "coherencia_consistencia_analisis_evidencias",
      namePrefix: "coherencia_consistencia_analisis",
      fields: [
        { name: "coherencia_consistencia_analisis_evidencia1", initialValue: "" },
        { name: "coherencia_consistencia_analisis_evidencia2", initialValue: "" },
        { name: "coherencia_consistencia_analisis_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Revisión de la Metodología de Análisis
    {
      type: "sectionTitle",
      key: "revision_metodologia_analisis",
      title: "Revisión de la Metodología de Análisis",
    },
    
    // Pregunta de Tipo Text Area: Revisión de la Metodología de Análisis
    {
      type: "textarea",
      key: "revision_metodologia_analisis_pregunta",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la revisión periódica de la metodología para realizar el análisis de la información estadística?",
      name: "revision_metodologia_analisis_pregunta",
      initialValue: "",
    },
    
    // Evidencias Documentales para Revisión de la Metodología de Análisis
    {
      type: "evidencias",
      key: "revision_metodologia_analisis_evidencias",
      namePrefix: "revision_metodologia_analisis",
      fields: [
        { name: "revision_metodologia_analisis_evidencia1", initialValue: "" },
        { name: "revision_metodologia_analisis_evidencia2", initialValue: "" },
        { name: "revision_metodologia_analisis_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño del Análisis
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_analisis",
      title: "Sugerencias para la mejora del Diseño del Análisis",
    },
    
    // Pregunta de Tipo Text Area: Sugerencias para la mejora del Diseño del Análisis
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_analisis_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño del análisis en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_analisis_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_7",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_7",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  