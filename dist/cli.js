#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var meow_1 = __importDefault(require("meow"));
var App_1 = __importDefault(require("./App"));
(0, meow_1.default)("\n\tUsage\n\t  $ create-comet-land\n\n\tExamples\n\t  $ npx create-comet-land\n");
(0, ink_1.render)(react_1.default.createElement(App_1.default, null));
