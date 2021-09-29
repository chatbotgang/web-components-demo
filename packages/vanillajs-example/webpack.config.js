const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const WDS_PORT = '9000'
const mode = process.env.NODE_ENV || 'development'
const isProd = mode === 'production'

const envs = {
  PUBLIC_HOST: JSON.stringify(process.env.PUBLIC_HOST || '')
}

const HtmlMinifyOptions = {
  collapseWhitespace: isProd,
  minifyCSS: {
    level: {
      1: {
        specialComments: isProd ? 0 : 'all' // remove special comments like /*! comments...
      }
    }
  },
  minifyJS: true,
  removeAttributeQuotes: isProd,
  removeComments: isProd
}

const plugins = [
  new webpack.DefinePlugin(envs),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './src/template/index.html',
    chunks: ['style', 'app'],
    filename: 'index.html',
    minify: HtmlMinifyOptions,
    inject: 'body',
    hash: true
  }),
  new HTMLInlineCSSWebpackPlugin()
]

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    style: ['reset-css', './src/style/app.css'],
    app: ['./src/js/app.js']
  },
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    port: WDS_PORT,
    host: '0.0.0.0',
    static: {
      publicPath: '/'
    }
  },
  stats: 'minimal',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  plugins: plugins,
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProd
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          // Babel options are in package.json
          loader: 'babel-loader'
        }
      }
    ]
  }
}
