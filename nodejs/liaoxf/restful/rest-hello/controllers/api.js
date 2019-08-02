var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({ products })
    },
    'POST /api/products': async (ctx, next) => {
        let { name, price } = ctx.request.body
        let p = { name, price }
        products.push(p);
        ctx.rest(p)
    }
}
