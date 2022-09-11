// module.exports = {
//   images: {
//     domains: ["images.unsplash.com","res.cloudinary.com","pin.it"],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };
const withPWA = require('next-pwa')({
  dest: 'public',
  disable:process.env.NODE_ENV === 'development'
})
module.exports = withPWA({
  images: {
    domains: ["images.unsplash.com","res.cloudinary.com","pin.it"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
