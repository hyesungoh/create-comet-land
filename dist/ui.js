"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
var a = 1;
let b = 1;
const App = ({ name = 'Stranger' }) => (react_1.default.createElement(ink_1.Text, null,
    "Helslo, ",
    react_1.default.createElement(ink_1.Text, { color: "green" }, name)));
exports.default = App;
