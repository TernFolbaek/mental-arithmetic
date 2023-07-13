import * as React from 'react';
import { Dropdown } from './dropdowns/DropdownNavbar';
import { ThemeSwitch } from './buttons/ThemeButton';

type NavbarProps = {
  onOptionSelected: (option: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onOptionSelected }) => {
  const operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  return (
    <nav className="navbar flex flex-col items-center px-2 w-[500px] sm:w-[370px] ">
      <div className='flex items-center w-full justify-between'>
        <h1 className="navbar-title flex-1 text-[24px] font-bold text-black dark:text-white text-center truncate">Mental Arithmetic</h1>
        <div className="flex-1 flex justify-center">
          <Dropdown options={operations} onOptionSelected={onOptionSelected} />
        </div>
        <ThemeSwitch/>
      </div>
      <div className="navbar-underline w-[450px] sm:w-[370px] bg-gray-800 h-0.5 mx-auto mt-2"></div>
      <p className='text-center text-[20px] text-black dark:text-white p-5'>Select One Of The Four Operations To Delve Deeper Into The Methods & Heuristics To Level Up Your Mental Arithmetic</p>
    </nav>
  );
};
