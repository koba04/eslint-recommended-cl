'use strict';

const eslint = require('eslint');
const config = require('./config');

const createESLintEngine = (options) => {
  let cliOptions = Object.assign({}, config);
  if (options.react) {
    cliOptions.baseConfig.extends = cliOptions.baseConfig.extends.concat('plugin:react/recommended');
  }
  if (options.disables) {
    options.disables.map((disable) => {
      cliOptions.rules[disable] = 'off';
    });
  }
  // might be override the extends provided by react option
  if (options.extends) {
    cliOptions = {
      useEslintrc: false,
      baseConfig: {
        extends: options.extends
      }
    };
  }
  return new eslint.CLIEngine(cliOptions);
}

const lint = (engine, path) => {
  return engine.executeOnFiles(path);
}

const format = (engine, results, format) => {
  const formatter = engine.getFormatter(format);
  return formatter(results);
};

const execute = (path, options = {}) => {
  const engine = createESLintEngine(options);
  const report = lint(engine, path);
  return format(engine, report.results, options.format);
}

module.exports = {
  execute,
}