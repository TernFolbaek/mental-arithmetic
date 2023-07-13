import { AdditionGame } from "../games/AdditionGame";
import React, { useState } from "react";

export const Addition: React.FC = () => {
  const [showGameBool, setShowGameBool] = useState(false);

  const showGame = () => {
    setShowGameBool(true);
  };

  return (
    <div className="mt-[20px] w-[500px] sm:w-[370px] text-white flex flex-col items-center gap-10">
      <div className="navbar-underline w-[450px] sm:w-[370px] bg-white h-0.5 mx-auto mt-2"></div>
      <h1 className="text-[25px] text-center">Addition</h1>
      <button className="border-2 p-2 rounded" onClick={showGame}>
        Play Game
      </button>
      {showGameBool && <AdditionGame />}
    </div>
  );
};
