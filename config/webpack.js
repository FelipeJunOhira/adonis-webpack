'use strict'

const path = use('path')

const Env = use('Env')

const ROOT_PATH = path.resolve(__dirname, '../')
const ASSETS_PUBLIC_PATH = Env.get('ASSETS_PUBLIC_PATH', '/')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Webpack Config
  |--------------------------------------------------------------------------
  |
  | Options passed to the Webpack. For more information about it check here
  | https://webpack.js.org/configuration/#options
  |
  */
  compilerConfig: {
    mode: Env.get('NODE_ENV', 'development'),
    entry: {
      // Specify your webpack entrypoint files here...
    },
    output: {
      publicPath: ASSETS_PUBLIC_PATH,
      path: path.join(ROOT_PATH, 'public'),
      filename: '[name].js'
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Dev middleware
  |--------------------------------------------------------------------------
  |
  | Enable webpack dev middleware to compile assets within the normal request
  | flow. It should always be a boolean.
  |
  */
  enableDevMiddleware: Env.get('ENABLE_WEBPACK_DEV_MIDDLEWARE') === 'true',

  /*
  |--------------------------------------------------------------------------
  | Middleware Config
  |--------------------------------------------------------------------------
  |
  | Options passed to the Webpack Dev Middleware. For more information about it
  | check here https://github.com/webpack/webpack-dev-middleware#options
  |
  */
  middlewareConfig: {
    publicPath: ASSETS_PUBLIC_PATH,
    index: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
  }
}
