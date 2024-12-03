import React from "react";
import {
  SectionTitle,
  RadioQuestion,
  CheckboxQuestion,
  Sugerencias,
  EvidenciasDocumentales,
  AccionesRequeridas,
} from "../../components/questions";

export const questions6_3 = (formData, handleChange) => [
  // Título de la Sección
  <SectionTitle key="titulo-seccion-6-3" title="Sección 6.3 - Diseño Temático" />,

  // Subtítulo: Introducción
  <SectionTitle key="introduccion-6-3" title="Introducción" />,

  // Alcance Temático
  <SectionTitle key="alcance-tematico" title="Alcance Temático" />,
  <RadioQuestion
    key="alcance_tematico"
    label="¿La operación estadística determina y documenta adecuadamente el alcance temático de acuerdo con el objetivo general?"
    name="alcance_tematico"
    options={["Sí", "No"]}
    value={formData.alcance_tematico}
    onChange={handleChange}
  />,
  <CheckboxQuestion
    key="alcance_tematico_incluye"
    label="Si la respuesta es Sí, ¿la documentación incluye:"
    name="alcance_tematico_incluye"
    options={[
      "El marco teórico",
      "El marco conceptual que describe los conceptos básicos y sus interrelaciones",
      "El marco legal (cuando sea aplicable)",
      "Los referentes internacionales y nacionales",
    ]}
    values={formData.alcance_tematico_incluye || []}
    onChange={handleChange}
  />,

  // Nomenclaturas y Clasificaciones
  <SectionTitle key="nomenclaturas-clasificaciones" title="Nomenclaturas y Clasificaciones" />,
  <RadioQuestion
    key="nomenclaturas_clasificaciones"
    label="¿La operación estadística evidencia el uso de las nomenclaturas y clasificaciones estadísticas adoptadas, adaptadas o elaboradas en su última versión disponible?"
    name="nomenclaturas_clasificaciones"
    options={["Sí", "No"]}
    value={formData.nomenclaturas_clasificaciones}
    onChange={handleChange}
  />,

  // Conceptos Estandarizados
  <SectionTitle key="conceptos-estandarizados" title="Conceptos Estandarizados" />,
  <RadioQuestion
    key="conceptos_estandarizados"
    label="¿La operación estadística evidencia y referencia el uso de conceptos estandarizados emitidos por el DANE u organismos internacionales?"
    name="conceptos_estandarizados"
    options={["Sí", "No"]}
    value={formData.conceptos_estandarizados}
    onChange={handleChange}
  />,

  // Pertinencia de Variables e Indicadores
  <SectionTitle key="variables-indicadores" title="Pertinencia de Variables e Indicadores" />,
  <RadioQuestion
    key="variables_indicadores"
    label="¿La operación estadística determina y documenta las variables estadísticas e indicadores relacionados con el fenómeno de estudio?"
    name="variables_indicadores"
    options={["Sí", "No"]}
    value={formData.variables_indicadores}
    onChange={handleChange}
  />,

  // Instrumento de Recolección
  <SectionTitle key="instrumento-recoleccion" title="Instrumento de Recolección" />,
  <RadioQuestion
    key="instrumento_recoleccion"
    label="¿La operación estadística determina el instrumento necesario para la recolección y asegura que esté estructurado en bloques temáticos con una secuencia lógica?"
    name="instrumento_recoleccion"
    options={["Sí", "No"]}
    value={formData.instrumento_recoleccion}
    onChange={handleChange}
  />,

  // Evidencias Documentales
  <EvidenciasDocumentales
    key="evidencias_documentales"
    namePrefix="evidencias"
    evidencias={formData.evidencias}
    handleChange={handleChange}
  />,

  // Sugerencias
  <Sugerencias
    key="sugerencias"
    label="¿Tiene alguna sugerencia o comentario sobre cómo mejorar el diseño temático en las operaciones estadísticas?"
    name="sugerencias"
    value={formData.sugerencias}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];