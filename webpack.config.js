const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Read .env manually so DefinePlugin always has the latest values
const envFile = path.resolve(__dirname, '.env')
const envVars = fs.existsSync(envFile)
  ? Object.fromEntries(fs.readFileSync(envFile, 'utf8').split('\n').filter(l => l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()] }))
  : {}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    open: true,
    client: {
      logging: 'warn'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', options: { api: 'modern', sassOptions: { silenceDeprecations: ['import'] } } }
        ]
      },
      {
        test: /\.(svg|jpg|png|avif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new webpack.DefinePlugin({
      'process.env.SUPABASE_ADMIN_KEY': JSON.stringify(envVars.SUPABASE_ADMIN_KEY || '')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html.ejs',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },
        { from: 'src/robots.txt', to: 'robots.txt' },
        { from: 'src/sitemap.xml', to: 'sitemap.xml' },
        { from: 'src/llms.txt', to: 'llms.txt' }
      ]
    })
  ]
};
