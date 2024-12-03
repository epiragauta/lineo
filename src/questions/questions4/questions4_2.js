// ./../../../questions/questions4/questions4_2.js

import React from "react";
import { 
  SectionTitle,
  RadioQuestion,
  SliderQuestion,
  EvidenciasDocumentales,
  Sugerencias,
  AccionesRequeridas,
} from "../../components/questions";

export const questions4_2 = (formData, handleChange, handleSelectChange) => [
  // Estructura Orgánica
  <SectionTitle key="estructura-organica" title="Estructura Orgánica" />,
  
  <RadioQuestion
    key="estructuraOrganicaPregunta1"
    label="¿La entidad cuenta con una estructura orgánica documentada?"
    name="estructuraOrganicaPregunta1"
    options={["Sí", "No"]}
    value={formData.estructuraOrganicaPregunta1}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="estructuraOrganicaEvidencias"
    namePrefix="estructuraOrganica"
    evidencias={[
      formData.estructuraOrganicaEvidencia1,
      formData.estructuraOrganicaEvidencia2,
      formData.estructuraOrganicaEvidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Documentación de Actividades
  <SectionTitle key="documentacion-actividades" title="Documentación de Actividades" />,
  
  <RadioQuestion
    key="documentacionActividadesPregunta1"
    label="¿La entidad tiene documentada, implementada y actualizada la información requerida para desarrollar las diferentes actividades conforme a los requisitos de esta norma?"
    name="documentacionActividadesPregunta1"
    options={["Sí", "No"]}
    value={formData.documentacionActividadesPregunta1}
    onChange={handleChange}
  />,
  
  <RadioQuestion
    key="documentacionActividadesPregunta2"
    label="Si la respuesta es Sí, ¿incluye esta documentación evidencia de los controles para asegurar la calidad del proceso estadístico?"
    name="documentacionActividadesPregunta2"
    options={["Sí", "No"]}
    value={formData.documentacionActividadesPregunta2}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="documentacionActividadesEvidencias"
    namePrefix="documentacionActividades"
    evidencias={[
      formData.documentacionActividadesEvidencia1,
      formData.documentacionActividadesEvidencia2,
      formData.documentacionActividadesEvidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Infraestructura para el Proceso Estadístico
  <SectionTitle key="infraestructura-proceso" title="Infraestructura para el Proceso Estadístico" />,
  
  <RadioQuestion
    key="infraestructuraPregunta1"
    label="¿La entidad cuenta con la infraestructura necesaria para el proceso estadístico, incluyendo edificios, equipos, recursos de transporte, tecnologías de la información y comunicación, y otros recursos?"
    name="infraestructuraPregunta1"
    options={["Sí", "No"]}
    value={formData.infraestructuraPregunta1}
    onChange={handleChange}
  />,
  
  <RadioQuestion
    key="infraestructuraPregunta2"
    label="Si la respuesta es Sí, ¿están documentados, implementados y actualizados todos estos aspectos?"
    name="infraestructuraPregunta2"
    options={["Sí", "No"]}
    value={formData.infraestructuraPregunta2}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="infraestructuraEvidencias"
    namePrefix="infraestructura"
    evidencias={[
      formData.infraestructuraEvidencia1,
      formData.infraestructuraEvidencia2,
      formData.infraestructuraEvidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Mecanismos de Cooperación
  <SectionTitle key="mecanismos-cooperacion" title="Mecanismos de Cooperación" />,
  
  <RadioQuestion
    key="mecanismosCooperacionPregunta1"
    label="¿La entidad desarrolla y gestiona mecanismos de cooperación con organismos pares para fortalecer la producción estadística?"
    name="mecanismosCooperacionPregunta1"
    options={["Sí", "No"]}
    value={formData.mecanismosCooperacionPregunta1}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="mecanismosCooperacionEvidencias"
    namePrefix="mecanismosCooperacion"
    evidencias={[
      formData.mecanismosCooperacionEvidencia1,
      formData.mecanismosCooperacionEvidencia2,
      formData.mecanismosCooperacionEvidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Documentación de Controles
  <SectionTitle key="documentacion-controles" title="Documentación de Controles" />,
  
  <SliderQuestion
    key="documentacionControlesPregunta1"
    label="¿Califique (1-5) qué tan efectiva es la entidad en documentar, implementar y actualizar las evidencias de los controles llevados a cabo para asegurar la calidad del proceso estadístico?"
    name="documentacionControlesPregunta1"
    value={formData.documentacionControlesPregunta1}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,
  
  <EvidenciasDocumentales
    key="documentacionControlesEvidencias"
    namePrefix="documentacionControles"
    evidencias={[
      formData.documentacionControlesEvidencia1,
      formData.documentacionControlesEvidencia2,
      formData.documentacionControlesEvidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Sugerencias para Responsabilidades de la Alta Dirección
  <SectionTitle key="sugerencias-responsabilidad" title="Sugerencias para Responsabilidades de la Alta Dirección" />,
  
  <Sugerencias
    key="sugerenciasAltaDireccion"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerenciasAltaDireccion"
    value={formData.sugerenciasAltaDireccion}
    handleChange={handleChange}
  />,

  // Acciones Requeridas
  <SectionTitle key="acciones-requeridas" title="Acciones requeridas" />,
  
  <AccionesRequeridas
    key="accionesRequeridas4_2"
    accionesData={{
      accion: formData.accion4_2,
      responsableSNS: formData.responsableSNS4_2,
      fechaCumplimiento: formData.fechaCumplimiento4_2,
    }}
    handleChange={handleChange}
  />,
];
