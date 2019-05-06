const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

class Webpack {
  constructor(Config) {
    this.config = Config.get('webpack')

    const compiler = webpack(this.config.compilerConfig)

    if (this.config.enableDevMiddleware) {
      this.webpackDevMiddleware = webpackDevMiddleware(
        compiler,
        this.config.middlewareConfig
      )
    } else {
      this.webpackDevMiddleware = (_, __, next) => next()
    }
  }

  async handle ({ request, response }, next) {
    return this.webpackDevMiddleware(request.request, response.response, next)
  }
}

module.exports = Webpack
