// ./src/components/questions/EvidenciasDocumentales.js

import React from "react";
import { Input } from "@material-tailwind/react";

const EvidenciasDocumentales = ({ evidencias, handleChange }) => {
  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Evidencias documentales</p>
      <div className="flex flex-col gap-2">
        {evidencias.map((evidencia, index) => (
          <Input
            key={index}
            type="text"
            name={evidencia.name}
            value={evidencia.value}
            onChange={handleChange}
            placeholder={`Ingrese evidencia ${index + 1}`}
            color="black"
          />
        ))}
      </div>
    </div>
  );
};

export default EvidenciasDocumentales;
