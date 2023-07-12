import { Navbar } from './client/components/Navbar';
import './client/styles/App.css';
import {Addition} from './client/components/pages/Addition';
import {Subtraction} from './client/components/pages/Subtraction';
import {Multiplication} from './client/components/pages/Multiplication';
import {Division} from './client/components/pages/Division';
import React, { useState } from 'react';

export default function App() {
  const [selectedOperation, setSelectedOperation] = useState('Addition');

  const handleOperationChange = (operation: string) => {
    setSelectedOperation(operation);
  };

  const renderPage = (selectedOperation: string) => {
    switch(selectedOperation) {
      case 'Addition':
        return <Addition />;
      case 'Subtraction':
        return <Subtraction />;
      case 'Multiplication':
        return <Multiplication />;
      case 'Division':
        return <Division />;
      default:
        return null;
    }
  };

  return (
    <div className="App w-full h-full bg-gray-700 flex flex-col items-center pt-[20px] px-2">
      <Navbar onOptionSelected={handleOperationChange} />
      {renderPage(selectedOperation)}
    </div>
  );
}
