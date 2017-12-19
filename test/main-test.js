const assert = require('assert');
const path = require('path');
const {execute} = require('../lib/index');

describe('execute', () => {
  it('should print an empty line if the lint is passed', () => {
    assert.equal(
      execute([path.resolve(__dirname, 'fixtures', 'ok.js')]),
      ''
    );
  });
  it('should print results if the lint is failed', () => {
    const expectedErrors = ['no-cond-assign', 'no-constant-condition'];
    const result = execute([path.resolve(__dirname, 'fixtures', 'error.js')]);
    expectedErrors.forEach((error) => {
      assert(result.indexOf(error) !== -1);
    });
  });
  it('should be able to disable specific rules', () => {
    const expectedErrors = ['no-cond-assign', 'no-constant-condition'];
    assert.equal(
      execute([path.resolve(__dirname, 'fixtures', 'error.js')], {disables: expectedErrors}),
      ''
    );
  });
  it('should be able to parse JSX', () => {
    assert.equal(
      execute([path.resolve(__dirname, 'fixtures', 'jsx.js')]),
      ''
    );
  });
  it('should be able to enable plugin:react/recommended rules', () => {
    assert(
      execute([path.resolve(__dirname, 'fixtures', 'jsx.js')], {react: true}).indexOf('react/prop-types')
      !==
      -1
    );
  });
});