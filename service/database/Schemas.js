const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'dbPostgres',
    user: 'postgres',
    password: 'postgres',
    database: 'db_gallery'
  }
});


module.exports = createSchemas = () => {
  knex.schema
    .createTable('images', table => {
      table.increments('id');
      table.text('imageUri');
      table.text('description');
    })
}

