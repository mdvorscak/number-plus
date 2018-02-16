import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');

export default [{
  input: 'src/index.js',
  plugins: [babel(babelrc())],
  output: [{
    file: pkg.module,
    format: 'es'
  }]
},
{
  input: 'src/index.js',
  plugins: [babel(babelrc({path: '.browser.babelrc'}))],
  output: [{
    file: pkg.main,
    format: 'umd',
    name: 'numberPlus'
  }]
}
];
