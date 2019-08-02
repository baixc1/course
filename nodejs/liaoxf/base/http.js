'use strict'

var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http')

var root = path.resolve('.')

var server = http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname
    var filepath = path.join(root, pathname)
    fs.stat(filepath, (err, stat) => {
        if (!err) {
            let isFile = stat.isFile()
            let isDir = stat.isDirectory()
            if (isDir) {
                let defaultPage = ['index', 'default']
                let flag = defaultPage.some(item => {
                    try {
                        let filepath = path.join(root, pathname, `${item}.html`)
                        if (fs.statSync(filepath).isFile()) {
                            fs.createReadStream(filepath).pipe(response)
                            return true
                        }
                    } catch (e) { }
                })
                if (!flag) {
                    response.writeHead(404)
                    response.end('404 Not Found')
                }
            } else if (isFile) {
                fs.createReadStream(filepath).pipe(response)
            } else {
                response.writeHead(404)
                response.end('404 Not Found')
            }
        } else {
            response.writeHead(500)
            response.end('server error')
        }

    })
})

server.listen(8080)