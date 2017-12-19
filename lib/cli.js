#!/usr/bin/env node
'use strict';
const parseArgs = require('minimist');
const {execute} = require('./index');

const args = parseArgs(process.argv.slice(2));
const react = args.react ? true : false;
let disables = [];
if (args.disable) {
  disables = typeof args.disable === 'string' ? [args.disable] : args.disable;
}
const result = execute(args._, {react, disables});
console.log(result);
