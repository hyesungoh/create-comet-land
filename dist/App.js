"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var _1_Check_Github_1 = __importDefault(require("./1_Check_Github"));
function App() {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, null,
            "Welcome to ",
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "comet-land"),
            " \u2604\uFE0F \u2604\uFE0F \u2604\uFE0F !",
            react_1.default.createElement(ink_1.Newline, null)),
        react_1.default.createElement(_1_Check_Github_1.default, null)));
}
exports.default = App;
