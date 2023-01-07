#!/usr/bin/env node

import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('package.json', import.meta.url)));
console.log(`Welcome to ${pkg.name}@${pkg.version}\r\n`);

; (async () => {
  await import('./dist/index.mjs');
})();