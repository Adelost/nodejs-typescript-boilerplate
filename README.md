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

Feel free to change to any coding style you prefer by editing `.prettierrc.yml`.


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

To assist in using environment variables before publishing to other environments, variables can be overridden locally by
creating `.local/env.json` which is also ignored by git.

## Workflow

To develop, run typescript compiler in watch mode, `npm run watch`, and code from `src/`. 

Alternatively, set up `ts-node` in your IDE (usually by adding `--require ts-node/register` as parameter to Node) to skip the compilation
step, however, `ts-node` has a somewhat slower startup time compared to running compiler in watch mode that can increase in larger
projects.

To run/debug, set breakpoints in `src/`, select file to run/debug from `dist/`.
In this way IDEs such as WebStorm and VSCode usually handles source maps automatically.


## License

Licensed under MIT. See LICENSE file for details.
