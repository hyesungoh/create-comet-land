const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: { main: './source/cli.tsx' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
