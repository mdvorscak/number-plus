import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');

const plugins = [
  babel(babelrc())
];

export default {
  input: 'src/index.js',
  plugins,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'numberPlus',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ]
};
