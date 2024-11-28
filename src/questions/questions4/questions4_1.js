// ./../../../questions/questions4/questions4_1.js

import React from "react";
import { Input, Radio, Checkbox } from "@material-tailwind/react";
import Slider from "@mui/material/Slider"; // Importar Slider de MUI

export const questions4_1 = (formData, handleChange, handleSelectChange) => [
  // Responsabilidad de Proporcionar Recursos
  {
    label: "Responsabilidad de Proporcionar Recursos",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La Alta Dirección proporciona los recursos necesarios para implementar lo establecido en la normativa vigente?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="respRecursosPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.respRecursosPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="respRecursosPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.respRecursosPregunta1 === "No"}
          color="black"
        />
        <Radio
          name="respRecursosPregunta1"
          label={<span className="text-black font-semibold">No Aplica</span>}
          value="No Aplica"
          onChange={handleChange}
          checked={formData.respRecursosPregunta1 === "No Aplica"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Si la respuesta es Sí, ¿La entidad asegura la disponibilidad de recursos adecuados para las siguientes áreas? (Seleccione todas las que apliquen)",
    component: (
      <div className="flex flex-col gap-2">
        <Checkbox
          label={
            <span className="text-black font-semibold">
              Implementación de la Norma Técnica de la Calidad del Proceso Estadístico
            </span>
          }
          name="respRecursosPregunta2"
          value="Implementación de la Norma Técnica de la Calidad del Proceso Estadístico"
          onChange={handleChange}
          checked={formData.respRecursosPregunta2?.includes("Implementación de la Norma Técnica de la Calidad del Proceso Estadístico")}
          color="black"
        />
        <Checkbox
          label={
            <span className="text-black font-semibold">
              Mantenimiento y mejora del proceso estadístico
            </span>
          }
          name="respRecursosPregunta2"
          value="Mantenimiento y mejora del proceso estadístico"
          onChange={handleChange}
          checked={formData.respRecursosPregunta2?.includes("Mantenimiento y mejora del proceso estadístico")}
          color="black"
        />
        <Checkbox
          label={
            <span className="text-black font-semibold">
              Compromiso con la transparencia, la confidencialidad y la imparcialidad
            </span>
          }
          name="respRecursosPregunta2"
          value="Compromiso con la transparencia, la confidencialidad y la imparcialidad"
          onChange={handleChange}
          checked={formData.respRecursosPregunta2?.includes("Compromiso con la transparencia, la confidencialidad y la imparcialidad")}
          color="black"
        />
        <Checkbox
          label={
            <span className="text-black font-semibold">
              Continuidad de la operación estadística
            </span>
          }
          name="respRecursosPregunta2"
          value="Continuidad de la operación estadística"
          onChange={handleChange}
          checked={formData.respRecursosPregunta2?.includes("Continuidad de la operación estadística")}
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
          name="respRecursosEvidencia1"
          value={formData.respRecursosEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="respRecursosEvidencia2"
          value={formData.respRecursosEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="respRecursosEvidencia3"
          value={formData.respRecursosEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Responsabilidad en la Mejora del Proceso Estadístico
  {
    label: "Responsabilidad en la Mejora del Proceso Estadístico",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La alta dirección mantiene y mejora el proceso estadístico de acuerdo con el marco legal y las funciones de la entidad?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="respMejoraPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.respMejoraPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="respMejoraPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.respMejoraPregunta1 === "No"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Si la respuesta es Sí, ¿en qué medida se asegura la alta dirección de mantener y mejorar los siguientes aspectos?",
    component: (
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-medium text-black">a) Procesos estadísticos</p>
          <Slider
            value={formData.respMejoraPregunta2a}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2a", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="procesos-estadisticos-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2a}</span>
        </div>
        <div>
          <p className="font-medium text-black">b) Recursos necesarios</p>
          <Slider
            value={formData.respMejoraPregunta2b}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2b", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="recursos-necesarios-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2b}</span>
        </div>
        <div>
          <p className="font-medium text-black">c) Transparencia</p>
          <Slider
            value={formData.respMejoraPregunta2c}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2c", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="transparencia-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2c}</span>
        </div>
        <div>
          <p className="font-medium text-black">d) Confidencialidad</p>
          <Slider
            value={formData.respMejoraPregunta2d}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2d", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="confidencialidad-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2d}</span>
        </div>
        <div>
          <p className="font-medium text-black">e) Imparcialidad</p>
          <Slider
            value={formData.respMejoraPregunta2e}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2e", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="imparcialidad-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2e}</span>
        </div>
        <div>
          <p className="font-medium text-black">f) Continuidad</p>
          <Slider
            value={formData.respMejoraPregunta2f}
            onChange={(event, value) =>
              handleSelectChange("respMejoraPregunta2f", value)
            }
            min={1}
            max={5}
            step={1}
            aria-labelledby="continuidad-slider"
          />
          <span className="ml-2 text-black">{formData.respMejoraPregunta2f}</span>
        </div>
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="respMejoraEvidencia1"
          value={formData.respMejoraEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="respMejoraEvidencia2"
          value={formData.respMejoraEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="respMejoraEvidencia3"
          value={formData.respMejoraEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Asignación y Comunicación de Roles y Responsabilidades
  {
    label: "Asignación y Comunicación de Roles y Responsabilidades",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "¿La Alta Dirección proporciona los recursos necesarios para implementar lo establecido en la normativa vigente?",
    component: (
      <div className="flex gap-4">
        <Radio
          name="asignacionPregunta1"
          label={<span className="text-black font-semibold">Sí</span>}
          value="Sí"
          onChange={handleChange}
          checked={formData.asignacionPregunta1 === "Sí"}
          color="black"
        />
        <Radio
          name="asignacionPregunta1"
          label={<span className="text-black font-semibold">No</span>}
          value="No"
          onChange={handleChange}
          checked={formData.asignacionPregunta1 === "No"}
          color="black"
        />
        <Radio
          name="asignacionPregunta1"
          label={<span className="text-black font-semibold">No Aplica</span>}
          value="No Aplica"
          onChange={handleChange}
          checked={formData.asignacionPregunta1 === "No Aplica"}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Si la respuesta es Sí, ¿La entidad asegura la disponibilidad de recursos adecuados para las siguientes áreas? (Seleccione todas las que apliquen)",
    component: (
      <div className="flex flex-col gap-2">
        <Checkbox
          label={<span className="text-black font-semibold">Roles específicos</span>}
          name="asignacionPregunta2"
          value="Roles específicos"
          onChange={handleChange}
          checked={formData.asignacionPregunta2?.includes("Roles específicos")}
          color="black"
        />
        <Checkbox
          label={<span className="text-black font-semibold">Responsabilidades correspondientes</span>}
          name="asignacionPregunta2"
          value="Responsabilidades correspondientes"
          onChange={handleChange}
          checked={formData.asignacionPregunta2?.includes("Responsabilidades correspondientes")}
          color="black"
        />
        <Checkbox
          label={<span className="text-black font-semibold">Cumplimiento de requisitos</span>}
          name="asignacionPregunta2"
          value="Cumplimiento de requisitos"
          onChange={handleChange}
          checked={formData.asignacionPregunta2?.includes("Cumplimiento de requisitos")}
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
          name="asignacionEvidencia1"
          value={formData.asignacionEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="asignacionEvidencia2"
          value={formData.asignacionEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="asignacionEvidencia3"
          value={formData.asignacionEvidencia3}
          onChange={handleChange}
          placeholder="Ingrese evidencia 3"
          color="black"
        />
      </div>
    ),
  },

  // Evaluación de la Responsabilidad de la Alta Dirección
  {
    label: "Evaluación de la Responsabilidad de la Alta Dirección",
    component: null, // Título de la sección
    type: "section",
  },
  {
    label: "Califique (1-5) qué tan efectiva es la alta dirección en proporcionar los recursos necesarios y mantener el compromiso con la normativa y el proceso estadístico:",
    component: (
      <div className="flex flex-col gap-2">
        <Slider
          value={formData.evaluacionPregunta1}
          onChange={(event, value) =>
            handleChange({ target: { name: "evaluacionPregunta1", value } })
          }
          min={1}
          max={5}
          step={1}
          aria-labelledby="evaluacion-responsabilidad-slider"
        />
        <span className="ml-2 text-black">{formData.evaluacionPregunta1}</span>
      </div>
    ),
  },
  {
    label: "Evidencias documentales",
    component: (
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          name="evaluacionEvidencia1"
          value={formData.evaluacionEvidencia1}
          onChange={handleChange}
          placeholder="Ingrese evidencia 1"
          color="black"
        />
        <Input
          type="text"
          name="evaluacionEvidencia2"
          value={formData.evaluacionEvidencia2}
          onChange={handleChange}
          placeholder="Ingrese evidencia 2"
          color="black"
        />
        <Input
          type="text"
          name="evaluacionEvidencia3"
          value={formData.evaluacionEvidencia3}
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
        name="sugerenciasComentario"
        value={formData.sugerenciasComentario}
        onChange={handleChange}
        placeholder="Ingrese su comentario"
        className="w-4/5 text-black border-black"
        color="black"
      />
    ),
  },

  // Acciones requeridas
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
