"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHardSubtraction = exports.generateEasySubtraction = exports.generateHarDivision = exports.generateEasyDivision = exports.generateHardMultiplication = exports.generateEasyMultiplication = exports.generateHardAddition = exports.generateEasyAddition = void 0;
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var generateEasyAddition = function () {
    var num1 = getRandomInt(1, 10);
    var num2 = getRandomInt(1, 10);
    var question = "".concat(num1, " + ").concat(num2);
    var answer = num1 + num2;
    return { question: question, answer: answer };
};
exports.generateEasyAddition = generateEasyAddition;
var generateHardAddition = function () {
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(1, 20);
    var num3 = getRandomInt(1, 20);
    var question = "".concat(num1, " + ").concat(num2, " + ").concat(num3);
    var answer = num1 + num2 + num3;
    return { question: question, answer: answer };
};
exports.generateHardAddition = generateHardAddition;
var generateEasyMultiplication = function () {
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(1, 20);
    var question = "".concat(num1, " \u00B7 ").concat(num2);
    var answer = num1 * num2;
    return { question: question, answer: answer };
};
exports.generateEasyMultiplication = generateEasyMultiplication;
var generateHardMultiplication = function () {
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(1, 20);
    var num3 = getRandomInt(1, 20);
    var question = "".concat(num1, " \u00B7 ").concat(num2, " \u00B7 ").concat(num3);
    var answer = num1 * num2 * num3;
    console.log(answer);
    return { question: question, answer: answer };
};
exports.generateHardMultiplication = generateHardMultiplication;
var generateEasyDivision = function () {
    var num1 = getRandomInt(1, 10);
    var num2 = getRandomInt(1, 10);
    var question = "".concat(num1, " / ").concat(num2);
    var answer = num1 / num2;
    return { question: question, answer: answer };
};
exports.generateEasyDivision = generateEasyDivision;
var generateHarDivision = function () {
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(1, 20);
    var num3 = getRandomInt(1, 20);
    var question = "".concat(num1, " + ").concat(num2, " + ").concat(num3);
    var answer = num1 + num2 + num3;
    return { question: question, answer: answer };
};
exports.generateHarDivision = generateHarDivision;
var generateEasySubtraction = function () {
    var num1 = getRandomInt(1, 10);
    var num2 = getRandomInt(1, 10);
    var question = "".concat(num1, " - ").concat(num2);
    var answer = num1 - num2;
    return { question: question, answer: answer };
};
exports.generateEasySubtraction = generateEasySubtraction;
var generateHardSubtraction = function () {
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(1, 20);
    var num3 = getRandomInt(1, 20);
    var question = "".concat(num1, "  - ").concat(num2, " - ").concat(num3);
    var answer = num1 - num2 - num3;
    return { question: question, answer: answer };
};
exports.generateHardSubtraction = generateHardSubtraction;
