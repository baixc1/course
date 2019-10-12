var express = require('express')

var app = express()

app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))

app.engine('html',require('express-art-template'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(3000, () => console.log('running...'))