var path = require('path');
var webpack = require('webpack');
var bourbonPath = require('bourbon').includePaths;
var bourbonNeatPath = require('bourbon-neat').includePaths;

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              sass: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [
                      bourbonPath,
                      bourbonNeatPath
                    ]
                  }
                },
                {
                  loader: 'sass-resources-loader',
                  options: {
                    resources: [
                      bourbonPath[0] + '/_bourbon.scss',
                      bourbonNeatPath[0] + '/_neat.scss',
                      path.resolve(__dirname, './src/assets/scss/base/_variables.scss'),
                      path.resolve(__dirname, './src/assets/scss/base/_mixins.scss'),
                    ]
                  }
                }
              ],
              scss: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [
                      bourbonPath,
                      bourbonNeatPath
                    ]
                  }
                },
                {
                  loader: 'sass-resources-loader',
                  options: {
                    resources: [
                      bourbonPath[0] + '/_bourbon.scss',
                      bourbonNeatPath[0] + '/_neat.scss',
                      path.resolve(__dirname, './src/assets/scss/_variables.scss'),
                      path.resolve(__dirname, './src/assets/scss/_mixins.scss'),
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
