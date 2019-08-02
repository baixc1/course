const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')

const app = new Koa()

app.use(bodyParser())
app.use(controller('controllers'))
app.listen('8000')