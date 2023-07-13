import React, { useState, useEffect } from 'react';
import { generateExpression } from 'math-expression-generator';
import Operator from 'math-expression-generator/types/Operator';
import * as math from 'mathjs';
import Modal from 'react-modal';
import Countdown from 'react-countdown';

interface MathProblem {
    question: string;
    answer: number;
}

interface MultiplicationGameProps {
    onClose: () => void;
}

export const MultiplicationGame: React.FC<MultiplicationGameProps> = ({ onClose }) => {
    const [problem, setProblem] = useState<MathProblem | null>(null);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [endTime, setEndTime] = useState<Date>(new Date());

    useEffect(() => {
        Modal.setAppElement('body');
        openModal();
        generateProblem();
    }, []);

    const openModal = () => {
        setIsOpen(true);
        setEndTime(new Date(Date.now() + 30000));
    }
    const closeModal = () => {
        setIsOpen(false);
        onClose();
    }
    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    }
    const generateProblem = () => {
        let randomNumber = getRandomInt(50,100);

        const expression = generateExpression({
            target: randomNumber,
            length: 2,
        });

        const question = expression.join(" ");
        const answer = math.evaluate(question);

        setProblem({
            question,
            answer
        });

        setUserAnswer("");
        setFeedback("");
    };

    const handleAnswerSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const numericUserAnswer = Number(userAnswer);
        if (numericUserAnswer === problem?.answer) {
            setFeedback("Correct! Generating a new question...");
            setCorrectAnswersCount(correctAnswersCount+1)
            generateProblem();
        } else {
            setFeedback("Wrong answer. Please try again.");
            setUserAnswer('')
        }
    };

    const renderer = ({ seconds, completed }: { seconds: number, completed: boolean }) => {
        if (completed) {
          return <span>Times up!</span>
        } else {
          return <span>{seconds}</span>
        }
    }

    return (
        <div>
            <Modal 
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 className="w-4/5 h-4/5 mx-auto border border-gray-300 bg-white overflow-auto rounded-md outline-none p-5 mt-5 flex flex-col items-center"
            >
               <h1 className='text-[30px] text-bold'>Multiplication-Game</h1>
                {problem && (
                    <form onSubmit={handleAnswerSubmit}>
                        <p>Question: {problem.question}</p>
                        <input className='border-2 border-black rounded' value={userAnswer} onChange={e => setUserAnswer(e.target.value)} required />
                        <button type="submit">Submit Answer</button>
                    </form>
                )}
                {feedback && (
                    <p>{feedback}</p>
                )}
                <p>{correctAnswersCount}</p>
                <Countdown date={endTime} renderer={renderer} />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};
