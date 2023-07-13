import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface CountdownProps {
  initialSeconds: number;
  onCountdownFinish: () => void;
}

export const CountDown: React.FC<CountdownProps> = ({ initialSeconds, onCountdownFinish }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [modalIsOpen, setIsOpen] = useState(true);

  


  useEffect(() => {
    Modal.setAppElement('body');
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOpen(false);
      onCountdownFinish();
    }
  }, [seconds, onCountdownFinish]);

  return (
    <Modal 
      isOpen={modalIsOpen}
      className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-50"
      overlayClassName="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="w-64 h-64 bg-white rounded flex items-center justify-center">
        <div className="text-center text-2xl">{seconds}</div>
      </div>
    </Modal>
  );
};
