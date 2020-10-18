module.exports = class UploadImage {

    knex = require('knex')({
        client: 'pg',
        version: '7.2',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'test',
            database: 'pg_dev'
        }
    });

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