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
var fs_1 = __importDefault(require("fs"));
var ink_1 = require("ink");
var ink_text_input_1 = __importDefault(require("ink-text-input"));
var DIRNAME = process.cwd() + '/comet-land';
var configurations = [
    {
        question: 'What is your name?',
        description: 'it will be display at footer',
        directory: '/packages/core/constants/General/index.ts',
        line: 4,
        callback: function (value) {
            return "export const authorName = '".concat(value, "';");
        },
    },
    {
        question: 'What is your blog name?',
        description: 'it will be display at blog header',
        directory: '/apps/blog/_config/index.json',
        line: 2,
        callback: function (value) {
            return "  \"blogName\": \"".concat(value, "\",");
        },
    },
    {
        question: 'What is your blog description?',
        description: 'it will be display at blog header',
        directory: '/apps/blog/_config/index.json',
        line: 3,
        callback: function (value) {
            return "  \"blogDescription\": \"".concat(value, "\",");
        },
    },
    {
        question: 'What is your github repo?',
        description: 'for comment system, please write with "github username/repo name". ex) hyesungoh/comet-land',
        directory: '/apps/blog/_config/index.json',
        line: 4,
        callback: function (value) {
            return "  \"blogRepo\": \"".concat(value, "\",");
        },
    },
];
function Configuration() {
    var _a = (0, react_1.useState)(0), index = _a[0], setIndex = _a[1];
    var _b = (0, react_1.useState)(''), eachValue = _b[0], setEachValue = _b[1];
    function clearEachValue() {
        setEachValue('');
    }
    function getReplacedFile(value, filePath) {
        var _a = configurations[index], line = _a.line, callback = _a.callback;
        var beforeFile = fs_1.default.readFileSync(filePath, 'utf-8').split('\n');
        beforeFile[line - 1] = callback(value);
        var replacedFile = beforeFile.join('\n');
        return replacedFile;
    }
    function replaceFile(value) {
        var directory = configurations[index].directory;
        var filePath = "".concat(DIRNAME).concat(directory);
        var replacedFile = getReplacedFile(value, filePath);
        fs_1.default.writeFileSync(filePath, replacedFile, { encoding: 'utf-8' });
    }
    function onSubmit(value) {
        replaceFile(value);
        clearEachValue();
        setIndex(function (prev) { return prev + 1; });
    }
    if (configurations.length > index)
        return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
            react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(ink_1.Box, { marginRight: 1 },
                    react_1.default.createElement(ink_1.Text, null, configurations[index].question)),
                react_1.default.createElement(ink_text_input_1.default, { value: eachValue, onChange: setEachValue, onSubmit: onSubmit })),
            react_1.default.createElement(ink_1.Text, { dimColor: true }, configurations[index].description)));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, null, "\u2705 Done with default configuration!")));
}
exports.default = Configuration;
