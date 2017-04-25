require('babel-register')
//css钩子，给node加载css
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  preprocessCss: (data, filename) =>
    require('node-sass').renderSync({
      data,
      file: filename
    }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:5]'
  })
require('./server')
