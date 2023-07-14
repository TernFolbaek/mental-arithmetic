"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayGame = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var PlayGame = function (_a) {
    var onPlay = _a.onPlay;
    return ((0, jsx_runtime_1.jsx)("button", { className: "rounded bg-neutral-200 px-2 py-2 text-1xl border-neutral-400 border-2 text-black hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]", onClick: onPlay, children: "Play Game" }));
};
exports.PlayGame = PlayGame;
