import React from "react";
import { Input, Select, Option, Radio } from "@material-tailwind/react";

export const questions = (formData, handleChange, handleSelectChange) => [
  {
    label: "Nombre de la Operación Estadística",
    component: (
      <Input
        type="text"
        name="nombreOperacion"
        value={formData.nombreOperacion}
        onChange={handleChange}
        placeholder="Ingrese el nombre"
        required
        color="black"
      />
    ),
  },
  {
    label: "Dependencia Encargada",
    component: (
      <Select
        name="dependencia"
        value={formData.dependencia}
        onChange={(value) => handleSelectChange("dependencia", value)}
        required
        color="black"
      >
        <Option value="direccion">Dirección de Innovación y Desarrollo</Option>
        <Option value="subdireccion">Subdirección de Analítica</Option>
        <Option value="ti">Subdirección de TI</Option>
        <Option value="interno">Control Interno</Option>
        <Option value="metodologia">Subdirección de Metodología</Option>
      </Select>
    ),
  },
  {
    label: "Categorización como Registro Administrativo",
    component: (
      <div className="flex gap-4">
        <Radio
          name="registroAdmin"
          label="Sí"
          value="Sí"
          onChange={handleChange}
          color="black"
        />
        <Radio
          name="registroAdmin"
          label="No"
          value="No"
          onChange={handleChange}
          color="black"
        />
      </div>
    ),
  },
  {
    label: "Objetivo de la Operación",
    component: (
      <Input
        type="text"
        name="objetivo"
        value={formData.objetivo}
        onChange={handleChange}
        placeholder="Describe el objetivo"
        required
        color="black"
      />
    ),
  },
  {
    label: "Población Objetivo",
    component: (
      <Input
        type="text"
        name="poblacion"
        value={formData.poblacion}
        onChange={handleChange}
        placeholder="Describe la población objetivo"
        required
        color="black"
      />
    ),
  },
  {
    label: "Año de Inicio",
    component: (
      <Input
        type="date"
        name="anioInicio"
        value={formData.anioInicio}
        onChange={handleChange}
        required
        color="black"
      />
    ),
  },
  {
    label: "Área Temática",
    component: (
      <Select
        name="areaTematica"
        value={formData.areaTematica}
        onChange={(value) => handleSelectChange("areaTematica", value)}
        required
        color="black"
      >
        <Option value="economica">Económica</Option>
        <Option value="sociodemografica">Sociodemográfica</Option>
        <Option value="ambiental">Ambiental</Option>
      </Select>
    ),
  },
  {
    label: "Periodicidad de la Operación Estadística",
    component: (
      <Input
        type="text"
        name="periodicidad"
        value={formData.periodicidad}
        onChange={handleChange}
        placeholder="Ejemplo: Mensual, Anual"
        required
        color="black"
      />
    ),
  },
  {
    label: "Unidades de Estudio",
    component: (
      <Select
        name="unidadEstudio"
        value={formData.unidadEstudio}
        onChange={(value) => handleSelectChange("unidadEstudio", value)}
        required
        color="black"
      >
        <Option value="Personas">Personas</Option>
        <Option value="IPS">IPS</Option>
        <Option value="EAPB">EAPB</Option>
        <Option value="Otras">Otras</Option>
      </Select>
    ),
  },
  {
    label: "Variables Principales",
    component: (
      <Input
        type="text"
        name="variablesPrincipales"
        value={formData.variablesPrincipales}
        onChange={handleChange}
        placeholder="Ingrese sugerencias"
        color="black"
      />
    ),
  },
  {
    label: "Cobertura Geográfica",
    component: (
      <Input
        type="text"
        name="coberturaGeografica"
        value={formData.coberturaGeografica}
        onChange={handleChange}
        placeholder="Ingrese cobertura geográfica"
        color="black"
      />
    ),
  },
  {
    label: "Período de Referencia",
    component: (
      <Input
        type="text"
        name="periodoReferencia"
        value={formData.periodoReferencia}
        onChange={handleChange}
        placeholder="Ingrese período de referencia"
        color="black"
      />
    ),
  },
  {
    label: "Método de Recolección de Información",
    component: (
      <Input
        type="text"
        name="metodoRecoleccion"
        value={formData.metodoRecoleccion}
        onChange={handleChange}
        placeholder="Ingrese método de recolección"
        color="black"
      />
    ),
  },
];
