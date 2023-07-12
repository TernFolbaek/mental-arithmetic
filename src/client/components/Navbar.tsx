import * as React from 'react';
import { Dropdown } from './dropdowns/navbarDropdown';


export const Navbar: React.FC = () => {
  const operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  const handleOperationChange = (operation: string) => {
    console.log('Selected operation:', operation);
  };

  return (
    <nav className="w-[500px] navbar flex flex-col ">
      <div className='flex justify-around'>
        <h1 className="navbar-title text-[24px] font-bold text-white">Mental Math App</h1>
        <Dropdown options={operations} onOptionSelected={handleOperationChange} />
      </div>
      <div className="navbar-underline w-[450px] bg-white h-0.5 mx-auto mt-1"></div>
    </nav>
  );
};
