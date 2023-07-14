"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var promise_1 = __importDefault(require("mysql2/promise"));
// Replace with your own values
var HOST = 'localhost';
var USER = 'tern';
var PASSWORD = 'jelkokelkojelkomerlin';
var DATABASE = 'mental_math';
exports.db = promise_1.default.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});
exports.db.getConnection()
    .then(function (connection) {
    console.log('Successfully connected to the database');
    connection.release();
})
    .catch(function (error) {
    console.error('Error connecting to the database: ', error);
});
