"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addition = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AdditionGame_1 = require("../games/AdditionGame");
var react_1 = require("react");
var Addition = function () {
    var _a = (0, react_1.useState)(false), showGameBool = _a[0], setShowGameBool = _a[1];
    var showGame = function () {
        setShowGameBool(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-[20px] w-[500px] sm:w-[370px] text-black flex flex-col items-center gap-10 dark:text-white", children: [(0, jsx_runtime_1.jsx)("div", { className: "navbar-underline w-[450px] sm:w-[370px] bg-black h-0.5 mx-auto mt-2" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-[25px] text-center", children: "Addition" }), (0, jsx_runtime_1.jsx)("button", { className: "border-2 p-2 rounded", onClick: showGame, children: "Play Game" }), showGameBool && (0, jsx_runtime_1.jsx)(AdditionGame_1.AdditionGame, {})] }));
};
exports.Addition = Addition;
