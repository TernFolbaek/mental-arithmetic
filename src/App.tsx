import { Navbar } from './client/components/Navbar';
import './client/styles/App.css';
import {Addition} from './client/components/pages/Addition';
import {Subtraction} from './client/components/pages/Subtraction';
import {Multiplication} from './client/components/pages/Multiplication';
import {Division} from './client/components/pages/Division';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {
  const [selectedOperation, setSelectedOperation] = useState('Addition');

  const handleOperationChange = (operation: string) => {
    setSelectedOperation(operation);
  };

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      axios.post('http://localhost:5001/api/users/new')
        .then(response => {
          localStorage.setItem('userId', response.data.userId);
        });
    }
  }, []);

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
    <div className="App w-full h-full bg-white-200 dark:bg-gray-800 flex flex-col items-center pt-[20px] px-2">
      <Navbar onOptionSelected={handleOperationChange} />
      {renderPage(selectedOperation)}
    </div>
  );
}
