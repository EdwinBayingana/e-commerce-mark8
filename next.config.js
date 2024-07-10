const withTM = require('next-transpile-modules')([
  '@ant-design/icons', // or specific paths like '@ant-design/icons/es'
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
});
