import React, { useState, useEffect } from 'react';
import { generateExpression } from 'math-expression-generator';
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
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [timerStartDate, setTimerStartDate] = useState<Date>(new Date());

    useEffect(() => {
        Modal.setAppElement('body');
        openModal();
        generateProblem();
    }, []);

    const openModal = () => {
        setIsOpen(true);
        setTimerStartDate(new Date());
    }

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    }

    const generateProblem = () => {
        const expression = generateExpression({
            target: 100,
            length: 2
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
            generateProblem();
        } else {
            setFeedback("Wrong answer. Please try again.");
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
                style={{
                    content: {
                        width: '80%',
                        height: '80%',
                        margin: 'auto',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <h1>Multiplication Game</h1>
                {problem && (
                    <form onSubmit={handleAnswerSubmit}>
                        <p>Question: {problem.question}</p>
                        <input type="number" value={userAnswer} onChange={e => setUserAnswer(e.target.value)} required />
                        <button type="submit">Submit Answer</button>
                    </form>
                )}
                {feedback && (
                    <p>{feedback}</p>
                )}
                <Countdown date={Date.now() + 30000} renderer={renderer} />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};
