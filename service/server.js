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



class HelloService {

    constructor() {
        this.names = []
    }

    create(data, params) {
        const name = data.name
        this.names.push(name)
        return Promise.resolve(this.helloTo(name))
    }

    find(params) {
        return Promise.resolve(this.names.map(this.helloTo))
    }

    helloTo(name) {
        return `Hello, ${name}!`
    }

}
//TODO CHECK ENTITY ERROR
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));
app.configure(express.rest());
app.use(cors(corsOptions))

app.use('/uploads', blobService({Model: blobStorage}));
app.use('/ping', new HelloService);
app.use(express.errorHandler());

app.listen(8000, function () {
    console.log('Feathers app started at localhost:8000')
});



