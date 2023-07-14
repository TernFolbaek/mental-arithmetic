"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = __importDefault(require("@mdi/react"));
var js_1 = require("@mdi/js");
var Dropdown = function (_a) {
    var options = _a.options, onOptionSelected = _a.onOptionSelected;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)(options[0]), selectedOption = _c[0], setSelectedOption = _c[1];
    var dropdownRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var pageClickEvent = function (e) {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsOpen(!isOpen);
            }
        };
        if (isOpen) {
            window.addEventListener('click', pageClickEvent);
        }
        return function () {
            window.removeEventListener('click', pageClickEvent);
        };
    }, [isOpen]);
    var selectOption = function (option) {
        setSelectedOption(option);
        onOptionSelected(option);
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "pr-1 pl-1 w-full rounded flex justify-center", ref: dropdownRef, children: [(0, jsx_runtime_1.jsxs)("button", { onClick: function (e) { return setIsOpen(!isOpen); }, className: "focus:outline-none text-[25px] text-white flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "hidden inline-block", children: selectedOption }), (0, jsx_runtime_1.jsx)(react_2.default, { path: js_1.mdiMenu, size: 1.5, className: "transform transition-transform duration-300 text-black dark:text-white ".concat(isOpen ? 'rotate-180' : '') })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-full mt-2 w-full sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto max-h-screen transition-all ease-in-out duration-500 transform ".concat(isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'), style: {
                        visibility: isOpen ? 'visible' : 'hidden',
                        transformOrigin: 'top'
                    }, children: (0, jsx_runtime_1.jsx)("div", { className: "dark:bg-white dark:text-gray-800 py-1 rounded-md text-white bg-gray-800 shadow-xs", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: options.map(function (option, index) { return ((0, jsx_runtime_1.jsx)("a", { onClick: function () { return selectOption(option); }, className: "block px-4 py-2 text-sm text-gray cursor-pointer hover:bg-gray-400", role: "menuitem", children: option }, index)); }) }) })] }) }));
};
exports.Dropdown = Dropdown;
