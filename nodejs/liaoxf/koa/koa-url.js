const Koa = require('koa')

const router = require('koa-router')()

const bodyParser = require('koa-bodyParser')

const app = new Koa()


app.use(async (ctx, next) => {
    let { method, url } = ctx.request
    console.log(method, url)
    await next();
})

router.get('/hello/:name', async ctx => {
    let { name } = ctx.params
    ctx.body = `Hello ${name}`
})

router.get('/', async (ctx) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});


app.use(bodyParser());
app.use(router.routes())

app.listen('3000', () => console.log('server start'))
