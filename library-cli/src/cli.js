#!/usr/bin/env node

const { Command } = require("commander");
const { add } = require("simple-library-junnak");
const program = new Command();
program
  .version("0.0.1")
  .description("간단한 덧셈 계산기")
  .option("-a, --a <number>", "첫 번째 숫자", parseInt)
  .option("-b, --b <number>", "두 번째 숫자", parseInt)
  .action((options) => {
    console.log(add(options.a, options.b));
  });
program.parse(process.argv);
