// ./src/components/questions/EvidenciasDocumentales.js

import React from "react";
import { Input } from "@material-tailwind/react";

const EvidenciasDocumentales = ({ namePrefix, formData, handleChange }) => {
  const evidencias = [];

  for (let index = 0; index < 3; index++) {
    evidencias.push(
      <Input
        key={`${namePrefix}Evidencia${index + 1}`}
        type="text"
        name={`${namePrefix}Evidencia${index + 1}`}
        value={formData[`${namePrefix}Evidencia${index + 1}`] || ""}
        onChange={handleChange}
        placeholder={`Ingrese evidencia ${index + 1}`}
        color="black"
      />
    );
  }

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Evidencias documentales</p>
      <div className="flex flex-col gap-2">{evidencias}</div>
    </div>
  );
};

export default EvidenciasDocumentales;
