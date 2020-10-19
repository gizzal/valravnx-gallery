const fs = require('fs-blob-store');
const blobService = require('feathers-blob');
const blobStorage = fs('/service/uploads/pictures');

const routes = [
  {route: "/uploads", service: blobService({Model: blobStorage})}
]

module.exports.services = routes