const createSchemas  = require("./database/Schemas");

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors')
const app = express(feathers());
const routes = require("./routes/Routes");

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

createSchemas()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.configure(express.rest())
app.use(cors(corsOptions))
app.use(express.errorHandler())

routes.services.forEach(route => app.use(route.route, route.service))

app.listen(3000, function () {
  console.log('Gallery service started at localhost:8000')
});



