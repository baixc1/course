const express = require('express')

const app = express()

//http 200 -> 304
//优先于下发use
app.get('/a.txt', (req, res) => {
    res.send('about 中文1')
})

// app.use('/public/', express.static('./public/'))
// app.use(express.static('./public'))
app.use('/a',express.static('./public'))

app.listen(3000, () => console.log('running ...'))