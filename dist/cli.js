#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const meow_1 = __importDefault(require("meow"));
const ui_1 = __importDefault(require("./ui"));
const ink_1 = require("ink");
const cli = (0, meow_1.default)(`
	Usage
	  $ create-comet-land

	Options
		--name  Your name

	Examples
	  $ create-comet-land --name=Jane
	  Hello, Jane
`, {
    flags: {
        name: {
            type: 'string',
        },
    },
});
(0, ink_1.render)(react_1.default.createElement(ui_1.default, { name: cli.flags.name }));
