// ./src/components/questions/RadioInput.js

import React from 'react';

function RadioInput({ options, name, value, onChange }) {
  return (
    <div className="flex space-x-4"> {/* Cambiado de 'space-y-4' a 'flex space-x-4' */}
      {options.map((option) => (
        <label
          key={option}
          className={`
            flex items-center p-3 border rounded-lg cursor-pointer
            ${value === option ? 'border-blue-500 bg-blue-50' : 'border-gray-600'}
          `}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange} // Pasamos el evento completo
            className="mr-2" // Aseguramos que el input sea visible
          />
          <span className="text-gray-900 font-medium">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}

export default RadioInput;
