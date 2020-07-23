'use strict'

const common = require('../webpack/common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  const preLoaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader
  })

  newConfig.module.rules = (newConfig.module.rules || []).concat(preLoaders)

  newConfig.resolve = common.resolve
  return newConfig
}
