const path = require('path')

async function copyConfigFile(cli) {
  const inFile = path.join(__dirname, 'config', 'webpack.js')
  const outFile = path.join(cli.helpers.configPath(), 'webpack.js')
  await cli.copy(inFile, outFile)
  cli.command.completed('create', 'config/webpack.js')
}

module.exports = async (cli) => {
  try {
    await copyConfigFile(cli)
  } catch (error) {
    // ignore error
  }
}
