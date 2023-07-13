import { MultiplicationGame } from "../games/MultiplicationGame"
import { useState } from "react";

export const Multiplication = () =>{
    const [showGameBool, setShowGameBool] = useState(false);

    const showGame = () => {
      setShowGameBool(true);
    };

    const hideGame = () =>{
        setShowGameBool(false)
    }
  
    return(
    <div className="mt-[20px] w-[500px] sm:w-[370px] text-black flex flex-col items-center gap-10 dark:text-white">
      <div className="navbar-underline w-[450px] sm:w-[370px] bg-black h-0.5 mx-auto mt-2"></div>
            <h1 className="text-[25px] text-center">
                Multiplication
            </h1>
            <button className="border-2 p-2 rounded" onClick={showGame}>
                Play Game
            </button>
            {showGameBool && <MultiplicationGame onClose={hideGame}/>}
        </div>
    )
}