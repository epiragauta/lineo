// ./src/components/questions/RadioInput.js
import React from 'react';

function RadioInput({ options, name, value, onChange }) {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label
          key={option}
          className={`
            flex items-center p-3 border rounded-lg cursor-pointer transition
            ${value === option
              ? 'border-primary bg-primary_light text-primary font-semibold'
              : 'border-gray-300 bg-white text-gray-900'
            }
          `}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="mr-2"
          />
          <span className="font-medium">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}

export default RadioInput;