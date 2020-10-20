const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config)

knex.raw('select 1+1 as result')
  .then(result=>console.log("database connected"))
  .catch(err => {
  console.error(err);
  process.exit(1);
});

module.exports = knex;