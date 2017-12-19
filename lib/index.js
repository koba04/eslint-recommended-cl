'use strict';

const eslint = require('eslint');
const config = require('./config');

const createESLintEngine = (options = {}) => {
  const cliOptions = Object.assign({}, config);
  if (options.react) {
    cliOptions.baseConfig.extends = cliOptions.baseConfig.extends.concat('plugin:react/recommended');
  }
  if (options.disables) {
    options.disables.map((disable) => {
      cliOptions.rules[disable] = 'off';
    });
  }
  return new eslint.CLIEngine(cliOptions);
}

const lint = (engine, path) => {
  return engine.executeOnFiles(path);
}

const format = (engine, results) => {
  const formatter = engine.getFormatter();
  return formatter(results);
};

const execute = (path, options) => {
  const engine = createESLintEngine(options);
  const report = lint(engine, path);
  return format(engine, report.results);
}

module.exports = {
  execute,
}