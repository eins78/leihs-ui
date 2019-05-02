const path = require('path')
const createReactAppConfigFactory = require('react-scripts/config/webpack.config.js')
const createReactAppConfig = createReactAppConfigFactory(
  process.env['NODE_ENV'] === 'production' ? 'production' : 'development'
)

module.exports = Object.assign({}, createReactAppConfig, {
  entry: {
    'leihs-ui-server-side': './src/server-side.js',
    'leihs-ui-client-side': './src/client-side.js'
  },
  output: Object.assign({}, createReactAppConfig.output, {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // library: "LeihsUI",
    libraryTarget: 'umd'
  }),

  // DISABLE CHUNKS…
  optimization: Object.assign(
    {},
    createReactAppConfig.optimizationoptimization,
    {
      splitChunks: {}
    }
  )
})
