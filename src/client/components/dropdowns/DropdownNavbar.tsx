import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';


type DropdownProps = {
  options: string[];
  onOptionSelected: (option: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ options, onOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };

  }, [isOpen]);

  const selectOption = (option: string) => {
    setSelectedOption(option);
    onOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="pr-1 pl-1 w-full rounded flex justify-center" ref={dropdownRef} >
        <button onClick={(e) => setIsOpen(!isOpen)} className="focus:outline-none text-[25px] text-white flex items-center">
          <span className="hidden inline-block">{selectedOption}</span>
          <Icon
            path={mdiMenu}
            size={1.5}
            className={`transform transition-transform duration-300 text-black dark:text-white ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div 
          className={`absolute top-full mt-2 w-full sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto max-h-screen transition-all ease-in-out duration-500 transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
          style={{
            visibility: isOpen ? 'visible' : 'hidden',
            transformOrigin: 'top'
          }}
        >
          <div className="dark:bg-white dark:text-gray-800 py-1 rounded-md text-white bg-gray-800 shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a key={index} onClick={() => selectOption(option)} className="block px-4 py-2 text-sm text-gray cursor-pointer hover:bg-gray-400" role="menuitem">{option}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
