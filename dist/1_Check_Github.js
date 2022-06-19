"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var shelljs_1 = __importDefault(require("shelljs"));
var _2_Clone_Project_1 = __importDefault(require("./2_Clone_Project"));
function CheckGithub() {
    var _a = (0, react_1.useState)(false), isCheckedGitInstalled = _a[0], setIsCheckedGitInstalled = _a[1];
    (0, react_1.useEffect)(function () {
        if (shelljs_1.default.which('git')) {
            setIsCheckedGitInstalled(true);
        }
    }, []);
    if (!isCheckedGitInstalled)
        return (react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, null,
                "\u274E Please install ",
                react_1.default.createElement(ink_1.Text, { color: "red" }, "git"),
                ", before start this project.")));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, null,
                "\u2705 Already installed ",
                react_1.default.createElement(ink_1.Text, { color: "red" }, "git"))),
        react_1.default.createElement(_2_Clone_Project_1.default, null)));
}
exports.default = CheckGithub;
