"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var App_1 = __importDefault(require("./App"));
require("./client/styles/App.css");
var client_1 = require("react-dom/client");
var domNode = document.getElementById('root');
if (domNode) {
    var root = (0, client_1.createRoot)(domNode);
    root.render((0, jsx_runtime_1.jsx)(App_1.default, {}));
}
