const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const blobService = require('feathers-blob');

const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads/pictures');

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use('/uploads', blobService({Model: blobStorage}));

app.use(express.errorHandler());

app.listen(3030, function(){
  console.log('Feathers app started at localhost:3030')
});