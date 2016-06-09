import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'NeoWidget',
  plugins: [
    resolve({
      main: true,
      browser: true,
    }),
    cjs(),
    buble(),
  ],
  dest: './lib/index.js',
};
