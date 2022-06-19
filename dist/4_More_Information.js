"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var CONFIGURATION_GUIDE = 'https://github.com/hyesungoh/comet-land#how-to-configuration';
var EN_BLOG_POST_GUIDE = 'https://github.com/hyesungoh/comet-land/blob/main/_docs/en-blog.md';
var EN_RESUME_GUIDE = 'https://github.com/hyesungoh/comet-land/blob/main/_docs/en-resume.md';
function MoreInformation() {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, null,
            "\uD83C\uDF89 Now you can start your own ",
            react_1.default.createElement(ink_1.Text, { color: "blue" }, "comet-land"),
            " with below command!"),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, null, "cd comet-land"),
        react_1.default.createElement(ink_1.Text, null, "yarn"),
        react_1.default.createElement(ink_1.Text, null, "yarn dev"),
        react_1.default.createElement(ink_1.Text, { dimColor: true }, "then runnin blog at http://localhost:3000, resume at http://localhost:3001"),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, null, "\u2692\uFE0F Please check below link for find more configuration settings like..."),
        react_1.default.createElement(ink_1.Text, { dimColor: true },
            "colors, social media accounts, url and",
            ' ',
            react_1.default.createElement(ink_1.Text, { inverse: true, color: "cyan" }, "more"),
            "!"),
        react_1.default.createElement(ink_1.Text, { color: "blueBright" }, CONFIGURATION_GUIDE),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, null, "\u2712\uFE0F Posting blog guide is check below link"),
        react_1.default.createElement(ink_1.Text, { color: "blueBright" }, EN_BLOG_POST_GUIDE),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, null, "\uD83D\uDCC4 Custom resume guide is check below link"),
        react_1.default.createElement(ink_1.Text, { color: "blueBright" }, EN_RESUME_GUIDE),
        react_1.default.createElement(ink_1.Newline, null)));
}
exports.default = MoreInformation;
