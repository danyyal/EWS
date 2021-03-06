import React from 'react';
import './FormSelect.css';

const FormSelect = ({ options, defaultValue, label, ...otherProps }) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      {label && (
        <label className="whitener">
          {label}
        </label>
      )}

      <select className="formSelect" value={defaultValue}  {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>{name}</option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;
