// ./src/components/questions/AccionesRequeridas.js

import React from "react";
import { Input } from "@material-tailwind/react";

const AccionesRequeridas = ({ accion, responsableSNS, fechaCumplimiento, handleChange }) => {
  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Acciones requeridas</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="font-medium text-black">Acción</p>
          <Input
            type="text"
            name="accion"
            value={accion}
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
            value={responsableSNS}
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
            value={fechaCumplimiento}
            onChange={handleChange}
            color="black"
          />
        </div>
      </div>
    </div>
  );
};

export default AccionesRequeridas;
