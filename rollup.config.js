import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  format: 'umd',
  moduleName: 'NeoWidget',
  plugins: [
    resolve({
      main: true,
      browser: true,
    }),
    commonjs(),
    buble(),
  ],
  dest: './lib/index.js',
};
