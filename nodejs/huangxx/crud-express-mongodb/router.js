const Student = require('./student')

console.log(Student)
const express = require('express')

const router = express.Router()

const commonError = (err, res) => {
    if (err) {
        res.status(500).send('Server error.')
        return true
    } else {
        return null
    }
}

/*
 * 渲染学生列表页面
 */
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (commonError(err, res)) return;
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students
        })
    })
})


/*
 * 渲染添加学生页面
 */
router.get('/students/new', function (req, res) {
    res.render('new.html')
})

/*
 * 处理添加学生
 */
router.post('/students/new', (req, res) => {
    new Student(req.body).save(err => {
        if (commonError(err, res)) return;
        res.redirect('/students')
    })
})

/*
 * 渲染编辑学生页面
 */
router.get('/students/edit', (req, res) => {
    Student.findById(req.query.id.replace(/"/g,''), (err, student) => {
        if (commonError(err, res)) return;
        res.render('edit.html', {
            student
        })
    })
})

/*
 * 处理编辑学生
 */
router.post('/students/edit', (req, res) => {
    console.log()
    Student.findByIdAndUpdate(req.body.id.replace(/"/g,''),res.body, err => {
        if (commonError(err, res)) return;
        res.redirect('/students')
    })
})

/*
 * 处理删除学生
 */
router.get('/students/delete', (req, res) => {
    Student.findByIdAndRemove(req.query.id.replace(/"/g,''), err => {
        if (commonError(err, res)) return;
        res.redirect('/students')
    })
})

module.exports = router