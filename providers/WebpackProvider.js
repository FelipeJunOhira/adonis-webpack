const { ServiceProvider } = require('@adonisjs/fold')

class WebpackProvider extends ServiceProvider {
  register () {
    this._registerMiddleware()
    this._registerCommand()
  }

  _registerMiddleware() {
    this.app.singleton('Adonis/Middleware/Webpack', () => {
      const Webpack = require('../src/Middlewares/Webpack')

      return new Webpack(this.app.use('Adonis/Src/Config'))
    })
  }

  _registerCommand() {
    this.app.bind('Adonis/Commands/Asssets/Precompile', () => {
      return require('../src/Commands/Assets/Precompile')
    })
  }

  boot () {
    const ace = require('@adonisjs/ace')

    ace.addCommand('Adonis/Commands/Asssets/Precompile')
  }
}

module.exports = WebpackProvider
