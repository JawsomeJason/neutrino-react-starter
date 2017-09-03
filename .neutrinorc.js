module.exports = {
  use: [
    ['neutrino-preset-airbnb'],
    ['neutrino-preset-react', {
      // https://neutrino.js.org/neutrino-preset-web#customizing
      html: { title: 'Epic React App' },
      // assets folder
      static: 'public',
    }],
    neutrino => (
      neutrino.config.entry('vendor')
        .add('react')
        .add('react-dom')
        .add('react-hot-loader')
        .add('react-router-dom')
        .add('react-async-component')
        .end()
      // https://neutrino.js.org/presets/neutrino-preset-react/#paths
      .output.publicPath('/')
    ),
    // ['neutrino-middleware-styles-loader', {
    //   minimize: false,
    //   // extractCSS: false,
    //   sourceMap: true,
    //   // postcss: {},
    //   // cssModules: false,
    //   // autoprefixer: false
    // }],
    './neutrino-custom.js'
  ],
}
