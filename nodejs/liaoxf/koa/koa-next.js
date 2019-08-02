const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    let { method, url } = ctx.request
    console.log(method, url)
    await next();
})

app.use(async (ctx, next) => {
    let start = Date.now()
    await next();
    let end = Date.now()
    console.log(start, end)
})

app.use(async (ctx, next) => {
    if (ctx.url == '/') {
        ctx.type = 'text/html'
        ctx.response.body = '<p>首页</p>'
    } else {
        await next()
    }
})

app.use(async (ctx) => {
    console.log('other')
    let { response: res } = ctx
    res.type = 'text/json'
    res.body = '{status:1}'
})

app.listen('8000', () => console.log('server start'))