const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

class Webpack {
  constructor(Config) {
    this.config = Config.get('webpack')

    const compiler = webpack(this.config.compilerConfig)

    this.webpackDevMiddleware = webpackDevMiddleware(
      compiler,
      this.config.middlewareConfig
    )
  }

  async handle ({ request, response }, next) {
    if (this.config.enableDevMiddleware) {
      return this.webpackDevMiddleware(request.request, response.response, next)
    } else {
      return next()
    }
  }
}

module.exports = Webpack
