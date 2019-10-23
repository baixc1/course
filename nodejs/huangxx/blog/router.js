var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {
        user: req.session.user
    })
})

router.get('/login', function (req, res) {
    res.render('login.html')
})

router.post('/login', function (req, res, next) {
    var body = req.body

    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function (err, user) {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid.'
            })
        }

        // 用户存在，登陆成功，通过 Session 记录登陆状态
        req.session.user = user

        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
})

router.get('/register', function (req, res, next) {
    // next({ message: '111' })
    res.render('register.html')
})

router.post('/register', function (req, res, next) {
    var body = req.body
    User.findOne({
        $or: [{
            email: body.email
        },
        {
            nickname: body.nickname
        }
        ]
    }, function (err, data) {
        if (err) {
            return next(err)
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exists.'
            })
        }

        body.password = md5(md5(body.password))

        new User(body).save(function (err, user) {
            if (err) {
                return next(err)
            }
            req.session.user = user

            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })
        })
    })
})

router.get('/logout', function (req, res) {
    req.session.user = null

    res.redirect('/login')
})

module.exports = router