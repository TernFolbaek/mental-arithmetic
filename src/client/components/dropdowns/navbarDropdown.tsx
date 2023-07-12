import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

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
    <div className="relative pr-1 pl-1 border-2  border-white" ref={dropdownRef} >
      <button onClick={(e) => setIsOpen(!isOpen)} className="focus:outline-none text-[25px] text-white flex items-center">
        {selectedOption}
        <Icon
          path={mdiChevronDown}
          size={1}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a key={index} onClick={() => selectOption(option)} className="block px-4 py-2 text-sm text-gray cursor-pointer hover:bg-gray-100" role="menuitem">{option}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
