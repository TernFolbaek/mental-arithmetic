"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplication = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MultiplicationGame_1 = require("../games/MultiplicationGame");
var CountDown_1 = require("../../services/CountDown");
var react_1 = require("react");
var PlayGame_1 = require("../buttons/PlayGame");
var Multiplication = function () {
    var _a = (0, react_1.useState)(false), showGameBool = _a[0], setShowGameBool = _a[1];
    var _b = (0, react_1.useState)(false), showCountDown = _b[0], setShowCountDown = _b[1];
    var _c = (0, react_1.useState)(false), countdownFinished = _c[0], setCountdownFinished = _c[1];
    (0, react_1.useEffect)(function () {
        if (countdownFinished) {
            showGame();
        }
    }, [countdownFinished]);
    var showGame = function () {
        setShowGameBool(true);
        setShowCountDown(false);
    };
    var showCountdown = function () {
        setShowCountDown(true);
    };
    var hideGame = function () {
        setShowGameBool(false);
        setCountdownFinished(false); // Reset countdown state
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-[20px] w-[500px] sm:w-[370px] text-black flex flex-col items-center gap-10 dark:text-white select-none", children: [(0, jsx_runtime_1.jsx)("div", { className: "navbar-underline w-[450px] sm:w-[370px] bg-black h-0.5 mx-auto mt-2" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-[25px] text-center", children: "Multiplication" }), (0, jsx_runtime_1.jsx)(PlayGame_1.PlayGame, { onPlay: showCountdown }), showGameBool && (0, jsx_runtime_1.jsx)(MultiplicationGame_1.MultiplicationGame, { onClose: hideGame }), showCountDown && (0, jsx_runtime_1.jsx)(CountDown_1.CountDown, { initialSeconds: 3, onCountdownFinish: function () { return setCountdownFinished(true); } })] }));
};
exports.Multiplication = Multiplication;
