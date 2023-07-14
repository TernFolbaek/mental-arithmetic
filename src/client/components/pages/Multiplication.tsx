import { MultiplicationGame } from "../games/MultiplicationGame"
import {CountDown} from '../../services/CountDown'
import { useState, useEffect } from "react";
import { PlayGame } from "../buttons/PlayGame";

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
        setCountdownFinished(false); // Reset countdown state
    }
  
    return(
    <div className="mt-[20px] w-[500px] sm:w-[370px] text-black flex flex-col items-center gap-10 dark:text-white select-none">
      <div className="navbar-underline w-[450px] sm:w-[370px] bg-black h-0.5 mx-auto mt-2"></div>
            <h1 className="text-[25px] text-center">
                Multiplication
            </h1>
            <PlayGame onPlay={showCountdown} />
            {showGameBool && <MultiplicationGame onClose={hideGame}/>}
            {showCountDown &&  <CountDown 
                    initialSeconds={3} 
                    onCountdownFinish={() => setCountdownFinished(true)} 
                />}

        </div>
    )
}
