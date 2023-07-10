import * as React from 'react';
import { Dropdown } from './dropdowns/navbarDropdown';

export const Navbar: React.FC = () => {
  const operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  const handleOperationChange = (operation: string) => {
    console.log('Selected operation:', operation);
  };

  return (
    <nav>
      <h1>Mental Math App</h1>
      <Dropdown options={operations} onOptionSelected={handleOperationChange} />
    </nav>
  );
};
