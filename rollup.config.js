import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

const pkg = require('./package.json');

const plugins = [
  babel(babelrc())
];

if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }));
}

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
