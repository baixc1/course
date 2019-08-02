const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const staticFiles = require('./static-files');
const isProduction = process.env.NODE_ENV === 'production';
const templating = require('./templating')

const app = new Koa()

app.use(staticFiles('/static/'));
app.use(bodyParser())
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(controller('controllers'))
app.listen('8000', () => console.log('server start'))