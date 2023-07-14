"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = require("./client/components/Navbar");
require("./client/styles/App.css");
var Addition_1 = require("./client/components/pages/Addition");
var Subtraction_1 = require("./client/components/pages/Subtraction");
var Multiplication_1 = require("./client/components/pages/Multiplication");
var Division_1 = require("./client/components/pages/Division");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
function App() {
    var _a = (0, react_1.useState)('Addition'), selectedOperation = _a[0], setSelectedOperation = _a[1];
    var handleOperationChange = function (operation) {
        setSelectedOperation(operation);
    };
    (0, react_1.useEffect)(function () {
        if (!localStorage.getItem('userId')) {
            axios_1.default.post('http://localhost:5001/api/users/new')
                .then(function (response) {
                localStorage.setItem('userId', response.data.userId);
            });
        }
    }, []);
    var renderPage = function (selectedOperation) {
        switch (selectedOperation) {
            case 'Addition':
                return (0, jsx_runtime_1.jsx)(Addition_1.Addition, {});
            case 'Subtraction':
                return (0, jsx_runtime_1.jsx)(Subtraction_1.Subtraction, {});
            case 'Multiplication':
                return (0, jsx_runtime_1.jsx)(Multiplication_1.Multiplication, {});
            case 'Division':
                return (0, jsx_runtime_1.jsx)(Division_1.Division, {});
            default:
                return null;
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App w-full h-full bg-white-200 dark:bg-gray-800 flex flex-col items-center pt-[20px] px-2", children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, { onOptionSelected: handleOperationChange }), renderPage(selectedOperation)] }));
}
exports.default = App;
