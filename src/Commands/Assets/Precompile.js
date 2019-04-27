'use strict'

const webpack = require('webpack');

const { Command } = require('@adonisjs/ace')

class AssetsPrecompile extends Command {
  constructor(config) {
    super()

    this.config = config
  }

  static get inject () {
    return ['Adonis/Src/Config']
  }

  static get signature () {
    return 'assets:precompile'
  }

  static get description () {
    return 'Precompile assets'
  }

  async handle (args, options) {
    const compilerConfig = this.config.get('webpack.compilerConfig')

    webpack(compilerConfig, (err, stats) => {
      if (err) return this.error(err)
      if (stats.hasErrors()) return console.error(stats.toJson().errors);

      console.log(stats.toString({ colors: true }));
    });
  }
}

module.exports = AssetsPrecompile
