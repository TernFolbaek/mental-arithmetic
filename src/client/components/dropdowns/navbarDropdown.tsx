import React, { useState } from 'react';

type DropdownProps = {
  options: string[];
  onOptionSelected: (option: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ options, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelectedOption(option);
    onOptionSelected(option);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
