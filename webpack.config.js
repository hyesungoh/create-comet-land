const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
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
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },
};
