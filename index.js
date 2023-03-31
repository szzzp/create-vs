#!/usr/bin/env node
const program = require("commander");

const helpoptions = require("./lib/core/help.js");

const { createComma } = require("./lib/core/create.js");

// 查看版本号
program.version(require("./package.json").version);

// 帮助和可选信息
helpoptions();

// 创建其他指令
createComma();

program.parse(process.argv);
