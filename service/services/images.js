const knex = require("../knex/knex")
const utilities = require("../util/Utilities")

module.exports = class Images {

  create(data, params) {
    return Promise.resolve(
      knex("images")
        .insert({
          id:utilities.uuidGenerate(),
          binary: data.binary,
          description: data.description,
          authored: data.authored
        })
    )
  }

  find(params) {
    return Promise.resolve(
      knex.select().from('images').timeout(3000)
    )
  }

  helloTo(name) {
    return `Hello, ${name}!`
  }

}