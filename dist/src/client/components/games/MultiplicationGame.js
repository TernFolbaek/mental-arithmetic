"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplicationGame = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_modal_1 = __importDefault(require("react-modal"));
var react_countdown_1 = __importDefault(require("react-countdown"));
var mathExpressionGenerator_1 = require("../../services/mathExpressionGenerator");
react_modal_1.default.setAppElement('body'); // Set app element for Modal here
var MultiplicationGame = function (_a) {
    var onClose = _a.onClose;
    var _b = (0, react_1.useState)(null), problem = _b[0], setProblem = _b[1];
    var _c = (0, react_1.useState)('easy'), difficulty = _c[0], setDifficulty = _c[1];
    var _d = (0, react_1.useState)(""), userAnswer = _d[0], setUserAnswer = _d[1];
    var _e = (0, react_1.useState)(""), feedback = _e[0], setFeedback = _e[1];
    var _f = (0, react_1.useState)(0), correctAnswersCount = _f[0], setCorrectAnswersCount = _f[1];
    var _g = (0, react_1.useState)(false), modalIsOpen = _g[0], setIsOpen = _g[1];
    var _h = (0, react_1.useState)(new Date()), endTime = _h[0], setEndTime = _h[1];
    (0, react_1.useEffect)(function () {
        react_modal_1.default.setAppElement('body');
        openModal();
        generateProblem(difficulty);
    }, [difficulty]);
    var openModal = function () {
        setIsOpen(true);
        setEndTime(new Date(Date.now() + 30000));
    };
    var closeModal = function () {
        setIsOpen(false);
        onClose();
    };
    var generateProblem = function (difficulty) {
        var problemGenerator = difficulty === 'easy' ? mathExpressionGenerator_1.generateEasyMultiplication : mathExpressionGenerator_1.generateHardMultiplication;
        var problem = problemGenerator();
        setProblem(problem);
        setUserAnswer("");
        setFeedback("");
    };
    var handleAnswerSubmit = function (event) {
        event.preventDefault();
        var numericUserAnswer = Number(userAnswer);
        if (numericUserAnswer === (problem === null || problem === void 0 ? void 0 : problem.answer)) {
            setFeedback("Correct! Generating a new question...");
            setCorrectAnswersCount(correctAnswersCount + 1);
            generateProblem(difficulty);
        }
        else {
            setFeedback("Wrong answer. Please try again.");
            setUserAnswer('');
        }
    };
    var renderer = function (_a) {
        var seconds = _a.seconds, completed = _a.completed;
        if (completed) {
            return (0, jsx_runtime_1.jsx)("span", { children: "Times up!" });
        }
        else {
            return (0, jsx_runtime_1.jsx)("span", { children: seconds });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "sm:w-4/5 h-4/5 w-3/5  mx-auto border border-8 border-gray-300 dark:border-white dark:bg-gray-700 bg-white overflow-auto rounded-md outline-none p-5 mt-5 flex flex-col dark:text-white shadow-2xl text-[25px] select-none", overlayClassName: "flex items-center justify-center fixed inset-0 bg-black bg-opacity-70", children: [(0, jsx_runtime_1.jsx)("label", { children: (0, jsx_runtime_1.jsxs)("select", { value: difficulty, onChange: function (e) { return setDifficulty(e.target.value); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "easy", children: "Easy" }), (0, jsx_runtime_1.jsx)("option", { value: "hard", children: "Hard" })] }) }), problem && ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleAnswerSubmit, children: [(0, jsx_runtime_1.jsx)("p", { children: problem.question }), (0, jsx_runtime_1.jsx)("input", { className: 'border-2 border-black rounded dark:text-black w-4/5', value: userAnswer, onChange: function (e) { return setUserAnswer(e.target.value); }, required: true }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Submit Answer" })] })), feedback && ((0, jsx_runtime_1.jsx)("p", { children: feedback })), (0, jsx_runtime_1.jsx)("p", { children: correctAnswersCount }), (0, jsx_runtime_1.jsx)(react_countdown_1.default, { date: endTime, renderer: renderer }), (0, jsx_runtime_1.jsx)("button", { onClick: closeModal, children: "Close" })] }));
};
exports.MultiplicationGame = MultiplicationGame;
