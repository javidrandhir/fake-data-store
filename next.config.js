// module.exports = {
//   images: {
//     domains: ["images.unsplash.com","res.cloudinary.com","pin.it"],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  skipWaiting:true,
  runtimeCaching,
  fallbacks:{
    document:'/_offline'
  }
})
module.exports = withPWA({
  images: {
    domains: ["images.unsplash.com","res.cloudinary.com","pin.it"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
