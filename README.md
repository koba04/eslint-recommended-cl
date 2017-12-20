# ESLint Recommended Cli

[![CircleCI](https://circleci.com/gh/koba04/eslint-recommended-cl.svg?style=svg)](https://circleci.com/gh/koba04/eslint-recommended-cl)
[![npm version](https://badge.fury.io/js/eslint-recommended-cli.svg)](https://badge.fury.io/js/eslint-recommended-cli)

This is a cli tool to run ESLint with recommended rules without any configuration files.

```
npx eslint-recommended-cli <files>
```

The rules is based on `eslint:recommended`, but a few options(`no-undef`, `no-console`, `no-unused-vars`) are disabled because of suppressing errors.

Currently, `eslint-recommended-cli` is supporting the following environments.

* 〜ES2017
* Modules
* CommonJS
* JSX
* Flowtype

## Options

`eslint-recommended-cli` has some options to customize the rules.

### `react`

`react` option is to enable `plugin:react/recommended`, you can run ESLint with recommended rules of `eslint-plugin-react`.

```
npx eslint-recommended-cli --react Component.jsx
```

### `disable`

This options is to disable specific rules you'd like to ignore errors.

```
npx eslint-recommended-cli --disable no-debugger --disable no-empty src/*.js
```

### `format`

This options is equivalent of ESLint's format option.

```
npx eslint-recommended-cli --format json src/*.js
```

### `extends`

If you have own ESLint settings, you can use it with the `extends` option.

```
npx -p eslint-config-airbnb \
-p eslint-plugin-jsx-a11y \
-p eslint-plugin-import \
-p eslint-recommended-cli \
eslint-recommended-cli --extends airbnb src/*.js
```
