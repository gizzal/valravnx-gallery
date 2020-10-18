const uploadImage =  require("./services/UploadImage");
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors')
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads/pictures');
const app = express(feathers());

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));
app.configure(express.rest());
app.use(cors(corsOptions))

app.use('/uploads', blobService({Model: blobStorage}));
app.use('/ping', new uploadImage);
app.use(express.errorHandler());

app.listen(8000, function () {
    console.log('Feathers app started at localhost:8000')
});



