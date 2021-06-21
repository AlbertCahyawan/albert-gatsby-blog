var path = require('path');

// this is for tsconfig path

exports.onCreateWebpackConfig = function({ actions }) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    })
}