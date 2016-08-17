import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    nodeResolve(),
    commonjs()
  ],
  dest: 'build/main.js'
};
