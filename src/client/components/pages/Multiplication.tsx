import { MultiplicationGame } from "../games/MultiplicationGame"
import {CountDown} from '../../services/CountDown'
import { useState, useEffect } from "react";


export const Multiplication = () =>{
    const [showGameBool, setShowGameBool] = useState(false);
    const [showCountDown, setShowCountDown] = useState(false);

    const [countdownFinished, setCountdownFinished] = useState<boolean>(false)
    useEffect(() => {
        if (countdownFinished) {
            showGame();
        }
    }, [countdownFinished]);

    const showGame = () => {
      setShowGameBool(true);
      setShowCountDown(false)
    };

    const showCountdown = () =>{
        setShowCountDown(true);
    }

    const hideGame = () =>{
        setShowGameBool(false)
    }
  
    return(
    <div className="mt-[20px] w-[500px] sm:w-[370px] text-black flex flex-col items-center gap-10 dark:text-white">
      <div className="navbar-underline w-[450px] sm:w-[370px] bg-black h-0.5 mx-auto mt-2"></div>
            <h1 className="text-[25px] text-center">
                Multiplication
            </h1>
            <button className="border-2 p-2 rounded" onClick={showCountdown}>
                Play Game
            </button>
            {showGameBool && <MultiplicationGame onClose={hideGame}/>}
            {showCountDown &&  <CountDown 
                    initialSeconds={3} 
                    onCountdownFinish={() => setCountdownFinished(true)} 
                />}

        </div>
    )
}