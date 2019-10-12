let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.engine('html',require('express-art-template'))

app.use('/public', express.static('./public'))

app
  .get('/', (req, res) => {
    res.render('index.html', { comments })
  })
  .get('/post', (req, res) => {
    res.render('post.html')
  })
  .post('/post', (req, res) => {
    let comment = req.body
    comment.dateTime = Date.now()
    comments.unshift(comment)
    res.redirect('/')
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