let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')

http
  .createServer((req, res) => {
    let readFileFn = (url, callback) => {
      fs.readFile(url, (err, data) => {
        if (err) {
          res.end('404 not found')
        } else {
          if (callback) {
            callback(data)
          } else {
            res.end(data)
          }
        }
      })
    }
    let { pathname, query } = url.parse(req.url, true)

    if (pathname === '/') {
      readFileFn('./views/index.html', data => {
        res.end(template.render(data.toString(), { comments }))
      })
    } else if (pathname.indexOf('/public/') === 0) {
      readFileFn('.' + pathname)
    } else if (pathname === '/post') {
      readFileFn('./views/post.html')
    } else if (pathname == '/pinglun') {
      query.dateTime = Date.now()
      comments.unshift(query)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else {
      readFileFn('./views/404.html')
    }
  })
  .listen(3000, () => console.log('running...'))

let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]