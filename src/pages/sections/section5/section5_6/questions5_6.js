// ./src/questions/questions5/questions5_6.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../../../components/questions";

export const questions5_6 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
  <SectionTitle
    key="titulo-seccion-5-6"
    title="Sección 5.6 - Comprobación de la Disponibilidad de Datos"
  />,

  // Subtítulo: Introducción
  <SectionTitle
    key="introduccion-5-6"
    title="Introducción"
  />,

  // Texto de Introducción
  <div key="texto-introduccion-5-6">
    <p>
      La comprobación de la disponibilidad de datos resulta fundamental para evaluar la viabilidad técnica de la operación estadística. Esta sección de la NTC PE 1000:2020 establece los procedimientos para identificar, analizar y validar las fuentes de información existentes, determinando si son suficientes, pertinentes y confiables para satisfacer los objetivos planteados. En caso de insuficiencia, se deben diseñar estrategias complementarias de recolección de datos o ajustes en los objetivos de la operación.
    </p>
  </div>,

  // Subtítulo: Verificación de Existencia de Información Estadística
  <SectionTitle
    key="verificacion_existencia_info_estadistica"
    title="Verificación de Existencia de Información Estadística"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="verificacion_existencia_info_estadistica_pregunta"
    label="¿La dependencia encargada de la operación estadística verifica la existencia de información estadística en el Sistema Estadístico Nacional - SEN que satisfaga las necesidades identificadas?"
    name="verificacion_existencia_info_estadistica_pregunta"
    options={["Sí", "No"]}
    value={formData.verificacion_existencia_info_estadistica_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Ratio Condicional
  <RadioQuestion
    key="evita_produccion_informacion_duplica_pregunta"
    label="Si la respuesta es Sí, ¿Se asegura que no se produzca información estadística que ya sea generada por otras entidades?"
    name="evita_produccion_informacion_duplica_pregunta"
    options={["Sí", "No"]}
    value={formData.evita_produccion_informacion_duplica_pregunta}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Verificación de Existencia de Información Estadística
  <EvidenciasDocumentales
    key="verificacion_existencia_info_estadistica_evidencias"
    namePrefix="verificacion_existencia_info_estadistica"
    evidencias={[
      formData.verificacion_existencia_info_estadistica_evidencia1,
      formData.verificacion_existencia_info_estadistica_evidencia2,
      formData.verificacion_existencia_info_estadistica_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Determinación de Fuentes de Datos
  <SectionTitle
    key="determinacion_fuentes_datos"
    title="Determinación de Fuentes de Datos"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="determinacion_fuentes_datos_pregunta"
    label="¿La dependencia encargada de la operación estadística determina las fuentes de datos a utilizar para la generación de información estadística?"
    name="determinacion_fuentes_datos_pregunta"
    options={["Sí", "No"]}
    value={formData.determinacion_fuentes_datos_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="fuentes_datos_utiliza"
    label="Si la respuesta es Sí, ¿Utiliza alguna de las siguientes fuentes para la comprobación de disponibilidad de datos? Seleccione todas las que considere."
    name="fuentes_datos_utiliza"
    options={[
      "Archivos de datos provenientes de registros administrativos",
      "Operaciones estadísticas",
      "Fuentes alternativas de datos"
    ]}
    values={formData.fuentes_datos_utiliza || []}
    onChange={handleChange}
    subLabels={[
      "a) Archivos de datos provenientes de registros administrativos",
      "b) Operaciones estadísticas",
      "c) Fuentes alternativas de datos"
    ]}
  />,

  // Evidencias Documentales para Determinación de Fuentes de Datos
  <EvidenciasDocumentales
    key="determinacion_fuentes_datos_evidencias"
    namePrefix="determinacion_fuentes_datos"
    evidencias={[
      formData.determinacion_fuentes_datos_evidencia1,
      formData.determinacion_fuentes_datos_evidencia2,
      formData.determinacion_fuentes_datos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Comprobación de Archivos de Datos
  <SectionTitle
    key="comprobacion_archivos_datos"
    title="Comprobación de Archivos de Datos"
  />,

  // Pregunta de Tipo Range para múltiples aspectos
  // Dado que hay múltiples aspectos a calificar, creamos un SliderQuestion por cada uno
  <SliderQuestion
    key="comprobacion_archivos_datos_identificacion_interaccion_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la identificación e interacción con los generadores de los archivos de datos?"
    name="comprobacion_archivos_datos_identificacion_interaccion_pregunta"
    value={formData.comprobacion_archivos_datos_identificacion_interaccion_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_utilidad_variables_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la utilidad de las variables de interés y los conceptos?"
    name="comprobacion_archivos_datos_utilidad_variables_pregunta"
    value={formData.comprobacion_archivos_datos_utilidad_variables_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_homologacion_unidades_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la homologación de las unidades de medida de las variables?"
    name="comprobacion_archivos_datos_homologacion_unidades_pregunta"
    value={formData.comprobacion_archivos_datos_homologacion_unidades_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_desagregacion_geografica_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en el nivel de desagregación geográfica del archivo de datos?"
    name="comprobacion_archivos_datos_desagregacion_geografica_pregunta"
    value={formData.comprobacion_archivos_datos_desagregacion_geografica_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_relevancia_datos_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la relevancia de los datos contenidos en los archivos de datos?"
    name="comprobacion_archivos_datos_relevancia_datos_pregunta"
    value={formData.comprobacion_archivos_datos_relevancia_datos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_alcance_variables_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en el alcance y variables aprovechables para la producción de información estadística?"
    name="comprobacion_archivos_datos_alcance_variables_pregunta"
    value={formData.comprobacion_archivos_datos_alcance_variables_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_ausencia_duplicidad_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la ausencia de duplicidad de datos?"
    name="comprobacion_archivos_datos_ausencia_duplicidad_pregunta"
    value={formData.comprobacion_archivos_datos_ausencia_duplicidad_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_transmision_oportuna_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la transmisión oportuna de las variables de interés de acuerdo con la periodicidad de envío?"
    name="comprobacion_archivos_datos_transmision_oportuna_pregunta"
    value={formData.comprobacion_archivos_datos_transmision_oportuna_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_capacidades_tecnologicas_pregunta"
    label="Califique (1-5) ¿Qué tan efectivas son las capacidades tecnológicas para transmitir, cargar, almacenar y procesar el archivo de datos?"
    name="comprobacion_archivos_datos_capacidades_tecnologicas_pregunta"
    value={formData.comprobacion_archivos_datos_capacidades_tecnologicas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <SliderQuestion
    key="comprobacion_archivos_datos_confidencialidad_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la confidencialidad, disponibilidad y protección de los datos?"
    name="comprobacion_archivos_datos_confidencialidad_pregunta"
    value={formData.comprobacion_archivos_datos_confidencialidad_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Comprobación de Archivos de Datos
  <EvidenciasDocumentales
    key="comprobacion_archivos_datos_evidencias"
    namePrefix="comprobacion_archivos_datos"
    evidencias={[
      formData.comprobacion_archivos_datos_evidencia1,
      formData.comprobacion_archivos_datos_evidencia2,
      formData.comprobacion_archivos_datos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación de Comparación y Homologación de Datos
  <SectionTitle
    key="documentacion_comparacion_homologacion_datos"
    title="Documentación de Comparación y Homologación de Datos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_comparacion_homologacion_datos_pregunta"
    label="Califique (1-5) ¿En qué medida la dependencia encargada de la operación estadística documenta la comparación y homologación de los datos obtenidos de diferentes fuentes, asegurando que sean consistentes con las series históricas del fenómeno de estudio (cuando sea aplicable)?"
    name="documentacion_comparacion_homologacion_datos_pregunta"
    value={formData.documentacion_comparacion_homologacion_datos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación de Comparación y Homologación de Datos
  <EvidenciasDocumentales
    key="documentacion_comparacion_homologacion_datos_evidencias"
    namePrefix="documentacion_comparacion_homologacion_datos"
    evidencias={[
      formData.documentacion_comparacion_homologacion_datos_evidencia1,
      formData.documentacion_comparacion_homologacion_datos_evidencia2,
      formData.documentacion_comparacion_homologacion_datos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Evaluación de la Metodología Basada en Disponibilidad de Datos
  <SectionTitle
    key="evaluacion_metodologia_disponibilidad_datos"
    title="Evaluación de la Metodología Basada en Disponibilidad de Datos"
  />,

  // Pregunta de Tipo Text Area
  <Sugerencias
    key="evaluacion_metodologia_disponibilidad_datos_pregunta"
    label="¿Cómo evalúa la dependencia encargada de la operación estadística la determinación de la metodología a emplear en la operación estadística a partir de la comprobación de la disponibilidad de datos?"
    name="evaluacion_metodologia_disponibilidad_datos_pregunta"
    value={formData.evaluacion_metodologia_disponibilidad_datos_pregunta}
    onChange={handleChange}
    placeholder="Describa brevemente su evaluación..."
    rows={4}
  />,

  // Evidencias Documentales para Evaluación de la Metodología Basada en Disponibilidad de Datos
  <EvidenciasDocumentales
    key="evaluacion_metodologia_disponibilidad_datos_evidencias"
    namePrefix="evaluacion_metodologia_disponibilidad_datos"
    evidencias={[
      formData.evaluacion_metodologia_disponibilidad_datos_evidencia1,
      formData.evaluacion_metodologia_disponibilidad_datos_evidencia2,
      formData.evaluacion_metodologia_disponibilidad_datos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Mejorar la Comprobación de la Disponibilidad de Datos
  <SectionTitle
    key="mejorar_comprobacion_disponibilidad_datos"
    title="Mejorar la Comprobación de la Disponibilidad de Datos"
  />,

  // Pregunta de Tipo Text Area
  <Sugerencias
    key="mejorar_comprobacion_disponibilidad_datos_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la verificación, homologación y gestión de datos en sus operaciones estadísticas?"
    name="mejorar_comprobacion_disponibilidad_datos_pregunta"
    value={formData.mejorar_comprobacion_disponibilidad_datos_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-6"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-6"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
