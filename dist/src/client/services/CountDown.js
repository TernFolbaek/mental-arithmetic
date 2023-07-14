"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_modal_1 = __importDefault(require("react-modal"));
var CountDown = function (_a) {
    var initialSeconds = _a.initialSeconds, onCountdownFinish = _a.onCountdownFinish;
    var _b = (0, react_1.useState)(initialSeconds), seconds = _b[0], setSeconds = _b[1];
    var _c = (0, react_1.useState)(true), modalIsOpen = _c[0], setIsOpen = _c[1];
    (0, react_1.useEffect)(function () {
        react_modal_1.default.setAppElement('body');
        if (seconds > 0) {
            var timer_1 = setInterval(function () {
                setSeconds(function (prevSeconds) { return prevSeconds - 1; });
            }, 1000);
            return function () { return clearInterval(timer_1); };
        }
        else {
            setIsOpen(false);
            onCountdownFinish();
        }
    }, [seconds, onCountdownFinish]);
    return ((0, jsx_runtime_1.jsx)(react_modal_1.default, { isOpen: modalIsOpen, className: "flex items-center justify-center fixed w-full h-full bg-opacity-50", overlayClassName: "flex items-center justify-center fixed inset-0 bg-black bg-opacity-50", children: (0, jsx_runtime_1.jsx)("div", { className: "w-64 h-64 bg-white rounded flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "text-center text-2xl", children: seconds }) }) }));
};
exports.CountDown = CountDown;
