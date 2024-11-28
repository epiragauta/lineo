import React from "react";
import { Input } from "@material-tailwind/react";

const EvidenceSection = ({ evidenceData, handleChange }) => {
  return (
    <div className="white-container">
      <p className="question font-medium text-lg mb-4">Evidencias Documentales</p>
      {evidenceData.map((evidence, index) => (
        <Input
          key={index}
          type="text"
          name={evidence.name}
          value={evidence.value}
          onChange={handleChange}
          placeholder={`Ingrese evidencia ${index + 1}`}
          className="mb-4"
        />
      ))}
    </div>
  );
};

export default EvidenceSection;
