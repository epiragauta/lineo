export const questions6_12 = [
    
    // Subtítulo: Metodología y Mecanismos de Evaluación del Desempeño
    {
      type: "sectionTitle",
      key: "metodologia_mecanismos_evaluacion_desempeno",
      title: "Metodología y Mecanismos de Evaluación del Desempeño",
    },
    
    // Pregunta de Tipo Radio: Metodología y Mecanismos de Evaluación del Desempeño
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_pregunta",
      label: "¿La dependencia encargada de la operación estadística determina y documenta adecuadamente la metodología y los mecanismos para realizar la evaluación del desempeño en las siguientes fases de la operación estadística?",
      name: "metodologia_mecanismos_evaluacion_desempeno_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación de Pruebas
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_diseno_construccion_pregunta",
      label: "a) Diseño y construcción",
      name: "metodologia_mecanismos_evaluacion_desempeno_diseno_construccion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_recoleccion_acopio_pregunta",
      label: "b) Recolección o acopio",
      name: "metodologia_mecanismos_evaluacion_desempeno_recoleccion_acopio_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_procesamiento_pregunta",
      label: "c) Procesamiento",
      name: "metodologia_mecanismos_evaluacion_desempeno_procesamiento_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_analisis_pregunta",
      label: "d) Análisis",
      name: "metodologia_mecanismos_evaluacion_desempeno_analisis_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_difusion_pregunta",
      label: "e) Difusión",
      name: "metodologia_mecanismos_evaluacion_desempeno_difusion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "metodologia_mecanismos_evaluacion_desempeno_evaluacion_final_pregunta",
      label: "f) Evaluación final",
      name: "metodologia_mecanismos_evaluacion_desempeno_evaluacion_final_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Metodología y Mecanismos de Evaluación del Desempeño
    {
      type: "evidencias",
      key: "metodologia_mecanismos_evaluacion_desempeno_evidencias",
      namePrefix: "metodologia_mecanismos_evaluacion_desempeno",
      fields: [
        { name: "metodologia_mecanismos_evaluacion_desempeno_evidencia1", initialValue: "" },
        { name: "metodologia_mecanismos_evaluacion_desempeno_evidencia2", initialValue: "" },
        { name: "metodologia_mecanismos_evaluacion_desempeno_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Consistencia con Mecanismos de Seguimiento Institucional
    {
      type: "sectionTitle",
      key: "consistencia_seguimiento_institucional",
      title: "Consistencia con Mecanismos de Seguimiento Institucional",
    },
    
    // Pregunta de Tipo Radio: Consistencia con Mecanismos de Seguimiento Institucional
    {
      type: "radio",
      key: "consistencia_seguimiento_institucional_pregunta",
      label: "¿La dependencia encargada de la operación estadística asegura que los mecanismos de evaluación del desempeño del proceso estadístico sean consistentes con los mecanismos de seguimiento institucional?",
      name: "consistencia_seguimiento_institucional_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Consistencia con Mecanismos de Seguimiento Institucional
    {
      type: "evidencias",
      key: "consistencia_seguimiento_institucional_evidencias",
      namePrefix: "consistencia_seguimiento_institucional",
      fields: [
        { name: "consistencia_seguimiento_institucional_evidencia1", initialValue: "" },
        { name: "consistencia_seguimiento_institucional_evidencia2", initialValue: "" },
        { name: "consistencia_seguimiento_institucional_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Efectividad en la Evaluación de Desempeño
    {
      type: "sectionTitle",
      key: "efectividad_evaluacion_desempeno",
      title: "Efectividad en la Evaluación de Desempeño",
    },
    
    // Pregunta de Tipo Range: Efectividad en la Evaluación de Desempeño
    {
      type: "range",
      key: "efectividad_evaluacion_desempeno_pregunta",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en determinar y documentar la metodología y los mecanismos para la evaluación del desempeño en las distintas fases de la operación estadística?",
      name: "efectividad_evaluacion_desempeno_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Efectividad en la Evaluación de Desempeño
    {
      type: "evidencias",
      key: "efectividad_evaluacion_desempeno_evidencias",
      namePrefix: "efectividad_evaluacion_desempeno",
      fields: [
        { name: "efectividad_evaluacion_desempeno_evidencia1", initialValue: "" },
        { name: "efectividad_evaluacion_desempeno_evidencia2", initialValue: "" },
        { name: "efectividad_evaluacion_desempeno_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación y Seguimiento de la Evaluación
    {
      type: "sectionTitle",
      key: "documentacion_seguimiento_evaluacion",
      title: "Documentación y Seguimiento de la Evaluación",
    },
    
    // Pregunta de Tipo Range: Documentación y Seguimiento de la Evaluación
    {
      type: "range",
      key: "documentacion_seguimiento_evaluacion_pregunta",
      label: "Califique de 1-5. ¿En qué medida la dependencia encargada de la operación estadística documenta y realiza el seguimiento a la evaluación del desempeño en las fases de la operación estadística?",
      name: "documentacion_seguimiento_evaluacion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Documentación y Seguimiento de la Evaluación
    {
      type: "evidencias",
      key: "documentacion_seguimiento_evaluacion_evidencias",
      namePrefix: "documentacion_seguimiento_evaluacion",
      fields: [
        { name: "documentacion_seguimiento_evaluacion_evidencia1", initialValue: "" },
        { name: "documentacion_seguimiento_evaluacion_evidencia2", initialValue: "" },
        { name: "documentacion_seguimiento_evaluacion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Contribución al Mejoramiento Continuo
    {
      type: "sectionTitle",
      key: "contribucion_mejoramiento_continuo",
      title: "Contribución al Mejoramiento Continuo",
    },
    
    // Pregunta de Tipo Text Area: Contribución al Mejoramiento Continuo
    {
      type: "textArea",
      key: "contribucion_mejoramiento_continuo_pregunta",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la contribución de la evaluación del desempeño al mejoramiento continuo de la operación estadística, según los criterios establecidos en el diseño o los requisitos de la norma?",
      name: "contribucion_mejoramiento_continuo_pregunta",
      initialValue: "",
    },
    
    // Evidencias Documentales para Contribución al Mejoramiento Continuo
    {
      type: "evidencias",
      key: "contribucion_mejoramiento_continuo_evidencias",
      namePrefix: "contribucion_mejoramiento_continuo",
      fields: [
        { name: "contribucion_mejoramiento_continuo_evidencia1", initialValue: "" },
        { name: "contribucion_mejoramiento_continuo_evidencia2", initialValue: "" },
        { name: "contribucion_mejoramiento_continuo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño de la Evaluación de Desempeño
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_evaluacion_desempeno",
      title: "Sugerencias para la mejora del Diseño de la Evaluación de Desempeño",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_evaluacion_desempeno_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño de la evaluación de desempeño en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_evaluacion_desempeno_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_12",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_12",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  