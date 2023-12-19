/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false, // 解析器
  map: ctx.env === 'development' ? ctx.map : false, // map文件
  plugins: [
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'last 4 Safari versions',
        'last 4 Android versions',
        'last 4 ChromeAndroid versions',
        'last 4 FirefoxAndroid versions',
        'last 4 iOS versions'
      ]
    }),
    require('tailwindcss')
    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ]
})
