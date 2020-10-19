module.exports = class UploadImage {

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