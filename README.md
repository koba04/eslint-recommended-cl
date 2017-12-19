# ESLint Recommended Cli

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
