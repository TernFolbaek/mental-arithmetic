"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DropdownNavbar_1 = require("./dropdowns/DropdownNavbar");
var ThemeButton_1 = require("./buttons/ThemeButton");
var Navbar = function (_a) {
    var onOptionSelected = _a.onOptionSelected;
    var operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "navbar flex flex-col items-center px-2 w-[500px] sm:w-[370px] ", children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center w-full justify-between', children: [(0, jsx_runtime_1.jsx)("h1", { className: "navbar-title flex-1 text-[24px] font-bold text-black dark:text-white text-center truncate", children: "Mental Arithmetic" }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex justify-center", children: (0, jsx_runtime_1.jsx)(DropdownNavbar_1.Dropdown, { options: operations, onOptionSelected: onOptionSelected }) }), (0, jsx_runtime_1.jsx)(ThemeButton_1.ThemeSwitch, {})] }), (0, jsx_runtime_1.jsx)("div", { className: "navbar-underline w-[450px] sm:w-[370px] bg-gray-800 h-0.5 mx-auto mt-2" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-center text-[20px] text-black dark:text-white p-5', children: "Select One Of The Four Operations To Delve Deeper Into The Methods & Heuristics To Level Up Your Mental Arithmetic" })] }));
};
exports.Navbar = Navbar;
