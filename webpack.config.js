const path = require('path');

module.exports = {
  mode: "none",
  entry: "./_scripts/index.js",
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: 'scripts.js',
  }
}