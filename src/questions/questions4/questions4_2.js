// ./../../../questions/questions4/questions4_2.js

import React from "react";
import { Input, Radio } from "@material-tailwind/react";
import Slider from "@mui/material/Slider"; // Importar Slider de MUI

export const questions4_2 = (formData, handleChange, handleSelectChange) => [
  // Estructura Orgánica
  {
    label: "Estructura Orgánica",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La entidad cuenta con una estructura orgánica documentada?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="estructuraOrganicaPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.estructuraOrganicaPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="estructuraOrganicaPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.estructuraOrganicaPregunta1 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="estructuraOrganicaEvidencia1"
          value={formData.estructuraOrganicaEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="estructuraOrganicaEvidencia2"
          value={formData.estructuraOrganicaEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="estructuraOrganicaEvidencia3"
          value={formData.estructuraOrganicaEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Documentación de Actividades
  {
    label: "Documentación de Actividades",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La entidad tiene documentada, implementada y actualizada la información requerida para desarrollar las diferentes actividades conforme a los requisitos de esta norma?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="documentacionActividadesPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.documentacionActividadesPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="documentacionActividadesPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.documentacionActividadesPregunta1 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Si la respuesta es Sí, ¿incluye esta documentación evidencia de los controles para asegurar la calidad del proceso estadístico?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="documentacionActividadesPregunta2"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.documentacionActividadesPregunta2 === "Sí"}
          color="black"
        />
        <Radio
          name="documentacionActividadesPregunta2"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.documentacionActividadesPregunta2 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="documentacionActividadesEvidencia1"
          value={formData.documentacionActividadesEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="documentacionActividadesEvidencia2"
          value={formData.documentacionActividadesEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="documentacionActividadesEvidencia3"
          value={formData.documentacionActividadesEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Infraestructura para el Proceso Estadístico
  {
    label: "Infraestructura para el Proceso Estadístico",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La entidad cuenta con la infraestructura necesaria para el proceso estadístico, incluyendo edificios, equipos, recursos de transporte, tecnologías de la información y comunicación, y otros recursos?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="infraestructuraPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.infraestructuraPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="infraestructuraPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.infraestructuraPregunta1 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Si la respuesta es Sí, ¿están documentados, implementados y actualizados todos estos aspectos?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="infraestructuraPregunta2"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.infraestructuraPregunta2 === "Sí"}
          color="black"
        />
        <Radio
          name="infraestructuraPregunta2"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.infraestructuraPregunta2 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="infraestructuraEvidencia1"
          value={formData.infraestructuraEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="infraestructuraEvidencia2"
          value={formData.infraestructuraEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="infraestructuraEvidencia3"
          value={formData.infraestructuraEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Mecanismos de Cooperación
  {
    label: "Mecanismos de Cooperación",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La entidad desarrolla y gestiona mecanismos de cooperación con organismos pares para fortalecer la producción estadística?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="mecanismosCooperacionPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.mecanismosCooperacionPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="mecanismosCooperacionPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.mecanismosCooperacionPregunta1 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="mecanismosCooperacionEvidencia1"
          value={formData.mecanismosCooperacionEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="mecanismosCooperacionEvidencia2"
          value={formData.mecanismosCooperacionEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="mecanismosCooperacionEvidencia3"
          value={formData.mecanismosCooperacionEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Documentación de Controles
  {
    label: "Documentación de Controles",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿Califique (1-5) qué tan efectiva es la entidad en documentar, implementar y actualizar las evidencias de los controles llevados a cabo para asegurar la calidad del proceso estadístico?",
    component: (
      <div className="flex flex-col gap-2">
        <Slider
          value={formData.documentacionControlesPregunta1}
          onChange={(event, value) =>
            handleSelectChange("documentacionControlesPregunta1", value)
          }
          min={1}
          max={5}
          step={1}
          aria-labelledby="documentacion-controles-slider"
        />
        <span className="ml-2 text-black">{formData.documentacionControlesPregunta1}</span>
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="documentacionControlesEvidencia1"
          value={formData.documentacionControlesEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="documentacionControlesEvidencia2"
          value={formData.documentacionControlesEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="documentacionControlesEvidencia3"
          value={formData.documentacionControlesEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Sugerencias para Responsabilidades de la Alta Dirección
  {
    label: "Sugerencias para Responsabilidades de la Alta Dirección",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?",
    component: (
      <Input
        type="text"
        name="sugerenciasAltaDireccion"
        value={formData.sugerenciasAltaDireccion}
        onChange={handleChange}
        placeholder="Ingrese su comentario"
        className="w-4/5 text-black border-black"
        color="black"
      />
    ),
  },

  // Acciones Requeridas
  {
    label: "Acciones requeridas",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "",
    component: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="font-medium text-black">Acción</p>
          <Input
            type="text"
            name="accion"
            value={formData.accion}
            onChange={handleChange}
            placeholder="Ingrese acción"
            color="black"
          />
        </div>
        <div>
          <p className="font-medium text-black">Responsable SNS</p>
          <Input
            type="text"
            name="responsableSNS"
            value={formData.responsableSNS}
            onChange={handleChange}
            placeholder="Ingrese responsable"
            color="black"
          />
        </div>
        <div>
          <p className="font-medium text-black">Fecha prevista de cumplimiento</p>
          <Input
            type="date"
            name="fechaCumplimiento"
            value={formData.fechaCumplimiento}
            onChange={handleChange}
            color="black"
          />
        </div>
      </div>
    ),
  },
];
