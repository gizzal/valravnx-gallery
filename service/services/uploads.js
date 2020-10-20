const fs = require('fs-blob-store');
const blobService = require('feathers-blob');
const blobStorage = fs('/service/uploads/pictures');
const knex = require("../knex/knex")

module.exports = class Uploads {

  create(data, params) {
    blobService({Model: blobStorage}).create(data).then()
    knex("images").insert({imageUri:"server/myimage.jpg",description:"Some image"}).then()
    return Promise.resolve("Image uploaded")
  }

  find(params) {
    return Promise.resolve(this.names.map(this.helloTo))
  }

  helloTo(name) {
    return `Hello, ${name}!`
  }

}