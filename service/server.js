const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors')
const app = express(feathers());
const routes = require("./Routes");
const knex = require('./knex/knex')
const port = 3000

//Create new table is it does not exist
knex.schema.hasTable("images").then(exists => {
  if (!exists) {
    knex.schema
      .createTable('images', table => {
        table.increments('id');
        table.text('imageUri');
        table.text('description');
      }).then()
  }
})

//Available URL to connect
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.configure(express.rest())
app.use(cors(corsOptions))
app.use(express.errorHandler())

routes.services.forEach(route => app.use(route.route, route.service))

app.listen(port, function () {
  console.log(`gallery service started at localhost:${port}`)
});



