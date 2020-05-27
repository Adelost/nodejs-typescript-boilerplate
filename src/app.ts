import * as fs from 'fs';
import { nanoid } from 'nanoid';
import config from './config';
import json from './data/example.json';
import { getAnswer } from './helper';
import { PROJECT_DIR, ROOT_DIR } from './root';

console.log(`__dirname: ${__dirname}`);
console.log(`ROOT_DIR: ${ROOT_DIR}`);
console.log(`PROJECT_DIR: ${PROJECT_DIR}`);
console.log(`config test: ${config.CONFIG_TEST}`);
console.log(`config env test: ${config.ENV_TEST}`);
console.log(`load json: ${JSON.stringify(json)}`);
console.log(`call function: ${getAnswer()}`);
console.log(`call dependency (nanoid): ${nanoid()}`);

if (json) console.log('single-line condition works');

console.log('closure test');
const bar = (value: number) => console.log(value);
[1, 2, 3].forEach(bar);
(() => bar(42))();

// Async test
(async () => {
  const files = await fs.promises.readdir(ROOT_DIR);
  console.log(files);
})();
