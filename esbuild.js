const { build } = require('esbuild');

Promise.all([
  build({
    bundle: true,
    entryPoints: ['src/index.ts'],
    format: 'iife',
    minify: true,
    outfile: 'dist/index.min.js',
    platform: 'browser',
    sourcemap: true,
  }),
  build({
    bundle: true,
    entryPoints: ['src/index.ts'],
    format: 'iife',
    minify: false,
    outfile: 'dist/index.js',
    platform: 'browser',
    sourcemap: true,
  }),
]).then();
