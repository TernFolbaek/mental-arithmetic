import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';
import Modal from 'react-modal';
import Countdown from 'react-countdown';
import { generateEasyMultiplication, generateHardMultiplication } from '../../services/mathExpressionGenerator';

interface MathProblem {
    question: string;
    answer: number;
}

interface MultiplicationGameProps {
    onClose: () => void;
}

export const MultiplicationGame: React.FC<MultiplicationGameProps> = ({ onClose }) => {
    const [problem, setProblem] = useState<MathProblem | null>(null);
    const [difficulty, setDifficulty] = useState('easy');
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [endTime, setEndTime] = useState<Date>(new Date());

    useEffect(() => {
        Modal.setAppElement('body');
        openModal();
        generateProblem(difficulty);
    }, [difficulty]);

    const openModal = () => {
        setIsOpen(true);
        setEndTime(new Date(Date.now() + 30000));
    }
    const closeModal = () => {
        setIsOpen(false);
        onClose();
    }
    const generateProblem = (difficulty: string) => {
        const problemGenerator = difficulty === 'easy' ? generateEasyMultiplication : generateHardMultiplication;
        const problem = problemGenerator();
        setProblem(problem);
        setUserAnswer("");
        setFeedback("");
    };

    const handleAnswerSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const numericUserAnswer = Number(userAnswer);
        if (numericUserAnswer === problem?.answer) {
            setFeedback("Correct! Generating a new question...");
            setCorrectAnswersCount(correctAnswersCount+1);
            generateProblem(difficulty);
        } else {
            setFeedback("Wrong answer. Please try again.");
            setUserAnswer('');
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
                 className="sm:w-4/5 h-4/5 w-3/5  mx-auto border border-8 border-gray-300 dark:border-white dark:bg-gray-700 bg-white overflow-auto rounded-md outline-none p-5 mt-5 flex flex-col dark:text-white shadow-2xl"
            >
               <h1 className='text-[30px] text-bold'>Multiplication-Game</h1>
               <label>
                    Difficulty:
                    <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                {problem && (
                    <form onSubmit={handleAnswerSubmit}>
                        <p>Question: {problem.question}</p>
                        <input className='border-2 border-black rounded dark:text-black' value={userAnswer} onChange={e => setUserAnswer(e.target.value)} required />
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
