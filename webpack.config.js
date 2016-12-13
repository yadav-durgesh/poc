import path from 'path';

const dependencies = [
  'epona',
  'react',
  'react-bootstrap',
  'react-dom',
  'react-router',
];

module.exports = {
  entry: {
    app: './client/src/app.js',
    vendor: dependencies,
  },
  output: {
    path: './client/build/js',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, './', 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
};
