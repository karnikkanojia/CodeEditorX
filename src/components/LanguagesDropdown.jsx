import React from 'react';
import Select from 'react-select';
import { languageOptions } from '../constants/languageOptions';
import { customStyles } from '../constants/customStyles';

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <div>
      <Select
        placeholder="Filter by Category"
        options={languageOptions}
        styles={customStyles}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    </div>
  );
};

export default LanguagesDropdown;