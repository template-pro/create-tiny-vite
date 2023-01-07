#!/usr/bin/env node

import { createRequire } from 'module';
import { spawnSync } from 'child_process'
import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('package.json', import.meta.url)));
const require = createRequire(import.meta.url);

console.log(`Welcome to ${pkg.name}@${pkg.version}`);

process.exit(
  spawnSync(
    require.resolve('create-vite'),
    ...process.argv.slice(2),
    { stdio: 'inherit' }
  ).status
)