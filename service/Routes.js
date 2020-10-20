const uploads = require("./services/uploads")

const routes = [
  {route: "/uploads", service: new uploads}
]

module.exports.services = routes