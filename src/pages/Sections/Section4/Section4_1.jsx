import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Select,
  Option,
  Radio,
  Button,
} from "@material-tailwind/react";

const Section4_1 = () => {
  const [formData, setFormData] = useState({
    nombreOperacion: "",
    dependencia: "",
    registroAdmin: "",
    objetivo: "",
    poblacion: "",
    anioInicio: "",
    areaTematica: "",
    periodicidad: "",
    unidadesEstudio: "",
    sugerencias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const questions = [
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
      label: "¿Es un Registro Administrativo?",
      component: (
        <div className="flex gap-4">
          <Radio
            name="registroAdmin"
            label="Sí"
            value="Sí"
            onChange={handleChange}
          />
          <Radio
            name="registroAdmin"
            label="No"
            value="No"
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      label: "Objetivo de la Operación",
      component: (
        <Textarea
          name="objetivo"
          value={formData.objetivo}
          onChange={handleChange}
          placeholder="Describe el objetivo"
          required
        />
      ),
    },
    {
      label: "Población Objetivo",
      component: (
        <Textarea
          name="poblacion"
          value={formData.poblacion}
          onChange={handleChange}
          placeholder="Describe la población objetivo"
          required
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
        >
          <Option value="economica">Económica</Option>
          <Option value="sociodemografica">Sociodemográfica</Option>
          <Option value="ambiental">Ambiental</Option>
        </Select>
      ),
    },
    {
      label: "Periodicidad",
      component: (
        <Input
          type="text"
          name="periodicidad"
          value={formData.periodicidad}
          onChange={handleChange}
          placeholder="Ejemplo: Mensual, Anual"
          required
        />
      ),
    },
    {
      label: "Sugerencias",
      component: (
        <Textarea
          name="sugerencias"
          value={formData.sugerencias}
          onChange={handleChange}
          placeholder="Ingrese sugerencias"
        />
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Sección 4.1: Requisitos de la Alta Dirección
        </h1>
        <h4 className="text-xl font-semibold mb-4 text-gray-700">
        La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico
         (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad 
         estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la
          calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.
        </h4>
        {questions.map((question, index) => (
          <Card
            key={index}
            className={`mb-4 ${
              index % 2 === 0
                ? "bg-primary_ligth border-gray-500 text-gray-800"
                : "bg-white border border-gray-500 text-gray-800"
            }`}
          >
            <CardBody>
              <label className="block mb-2 text-lg font-medium">
                {question.label}
              </label>
              {question.component}
            </CardBody>
          </Card>
        ))}
        <Button type="submit" className="bg-primary text-white">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Section4_1;
