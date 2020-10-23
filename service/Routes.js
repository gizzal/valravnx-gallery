const images = require("./services/images")

const routes = [
  {route: "/images", service: new images}
]

module.exports.services = routes