const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors')
const app = express(feathers());
const routes = require("./Routes");
const port = 3000
const knex = require("./knex/knex")
const logging = require("./logging/logging")

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
  knex.status()
  knex.createImageTable()
  logging.info(`Gallery service has started at localhost:${port}`)
});



