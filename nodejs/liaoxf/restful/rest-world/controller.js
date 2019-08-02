
const fs = require('fs')
const router = require('koa-router')();

let addController = (dir) => {
    var files = fs.readdirSync('./' + dir).filter(f => f.endsWith('.js'))

    files.forEach(f => {
        let mapping = require(__dirname + '/controllers/' + f)
        for (let url in mapping) {
            if (url.startsWith('GET')) {
                let path = url.slice(4)
                router.get(path, mapping[url])
            } else if (url.startsWith('POST')) {
                let path = url.slice(5)
                router.post(path, mapping[url])
            } else {
                console.log('invalid url')
            }
        }
    })
}


module.exports = dir => {
    let controllers_dir = dir || 'controllers'
    addController(controllers_dir)
    return router.routes()
}