const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config)
const logging = require("../logging/logging")

const status = () => {
  knex.raw('select 1+1 as result')
    .then(result => logging.info("database connected"))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

const createImageTable = (table) => {
  knex.schema.hasTable("images").then(exists => {
    if (!exists) {
      knex.schema
        .createTable('images', table => {
          table.string('id');
          table.date('authored');
          table.text('binary');
          table.text('description');
        }).then(data => {
        logging.info("tables generated")
      })
    }
    {
      logging.info("images table already exist")
    }
  })
}

module.exports = knex;
module.exports.status = status;
module.exports.createImageTable = createImageTable;