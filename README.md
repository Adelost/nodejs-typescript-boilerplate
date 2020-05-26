# nodejs-typescript-boilerplate

Boilerplate project for Node.js with Typescript
using Jest for testing/coverage, 
ESLint for static code analysis,
Prettier for style enformcement 
and Webpack for optional minification.

## Instructions

To install and run:

```
npm install
npm run build
npm run start
```

To test:

```
npm run test
npm run coverage
```

To format source files with Prettier:

```
npm run format
```

To lint source files with ESLint:

```
npm run lint
npm run lint-fix # Formats and autofixes simple warnings
```

To build and run minified build

```
npm run minify
npm run start-minified
```

See `package.json` for more options.

To assist in using environment variables before publishing to other environments, environment variables can be overridden locally by
 creating `./.local/env.json` which is also ignored by git.
 
## Notes


```
npm run minify
npm run start-minified
```

## Workflow

To develop, run typescript compiler in watch mode, `npm run watch`, and code from `src/`.

To run/debug, set breakpoints in `src/`, select file to run/debug from `dist/`.
In this way IDEs such as WebStorm and VSCode usually handles source maps automatically.

Alternatively, set up `ts-node` in your IDE to skip the compilation step, however, `ts-node` can result in slow startup time
in large projects compared to running typescript in watch mode.

## Code style

Prettier is configured to format StandardJS-code style
https://standardjs.com/rules.html

Basically you can skip semicolon except if a line starts with `(` or `[` (which in reality is quite rare):

```
const bar = () => {}
;[1, 2, 3].forEach(bar)
;(() => {})()
```

Feel free to change to any other coding style you prefer by editing `.prettierrc.yml`. 

## License

Licensed under ISC. See the LICENSE file for details.
