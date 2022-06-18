"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
function App(_a) {
    var _b = _a.name, name = _b === void 0 ? 'Stranger' : _b;
    return (react_1.default.createElement(ink_1.Text, null,
        "Hello, ",
        react_1.default.createElement(ink_1.Text, { color: "green" }, name)));
}
exports.default = App;
