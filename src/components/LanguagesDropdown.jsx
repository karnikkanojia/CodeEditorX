import React from 'react';
import Select from 'react-select';
import { languageOptions } from '../constants/languageOptions';
import { customStyles } from "../constants/customStyles";

const LanguagesDropdown = () => {
  return (
    <div>
      <Select
        placeholder="Filter by Category"
        options={languageOptions}

      />
    </div>
  )
}

export default LanguagesDropdown