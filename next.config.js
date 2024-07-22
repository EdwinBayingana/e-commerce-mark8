const withTM = require("next-transpile-modules")([
  "@ant-design/icons", // or specific paths like '@ant-design/icons/es'
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "example.com", "picsum.photos"],
  },
  webpack(config) {
    return config;
  },
});
