"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var js_1 = require("@mdi/js");
var react_2 = __importDefault(require("@mdi/react"));
var ThemeSwitch = function () {
    var _a = (0, react_1.useState)(localStorage.theme), theme = _a[0], setTheme = _a[1];
    (0, react_1.useEffect)(function () {
        document.documentElement.className = theme;
    }, [theme]);
    var switchTheme = function () {
        if (theme === 'dark') {
            localStorage.theme = 'light';
            setTheme('light');
        }
        else {
            localStorage.theme = 'dark';
            setTheme('dark');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-gray-800 dark:bg-white p-2 rounded-md cursor-pointer", onClick: switchTheme, children: theme === 'dark' ? ((0, jsx_runtime_1.jsx)(react_2.default, { path: js_1.mdiWeatherNight, size: 1 })) : ((0, jsx_runtime_1.jsx)(react_2.default, { className: 'text-white', path: js_1.mdiWeatherSunny, size: 1 })) }));
};
exports.ThemeSwitch = ThemeSwitch;
