/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

const fs = require('fs')

const dbPath = './db.json'

const commonReadFile = ({ callback, success }) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            callback(err)
        } else {
            success(JSON.parse(data).students)
        }
    })
}

const commonWriteFile = ({ data, callback }) => {
    const fileData = JSON.stringify({ students: data }, null, ' ')
    fs.writeFile(dbPath, fileData, err => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}

/**
 * 获取学生列表
 * @param  {Function} callback 回调函数
 */
const find = callback => {
    commonReadFile({
        callback,
        success(data) {
            callback(null, data)
        }
    })
}

/**
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */
const findById = (id, callback) => {
    commonReadFile({
        callback,
        success(data) {
            const ret = data.find(item => {
                return item.id === parseInt(id)
            })
            callback(null, ret)
        }
    })
}

/**
 * 添加保存学生
 * @param  {Object}   student  学生对象
 * @param  {Function} callback 回调函数
 */

const save = (student, callback) => {
    commonReadFile({
        callback,
        success(data) {
            if (data && data.length) {
                student.id = data[data.length - 1].id + 1
            } else {
                student.id = 1
            }
            data.push(student)
            commonWriteFile({ data, callback })
        }
    })
}

/**
 * 更新学生
 */
const updateById = (student, callback) => {
    commonReadFile({
        callback,
        success(data) {
            student.id = parseInt(student.id)
            //find方法获取的对象地址不变
            const stu = data.find(item => item.id === student.id)

            for (let key in student) {
                stu[key] = student[key]
            }

            commonWriteFile({ data, callback })
        }
    })
}

/**
 * 删除学生
 */
const deleteById = (id, callback) => {
    commonReadFile({
        callback,
        success(data) {
            const delId = data.findIndex(item => item.id === parseInt(id))

            data.splice(delId, 1)

            commonWriteFile({ data, callback })
        }
    })
}

module.exports = {
    find,
    findById,
    save,
    updateById,
    deleteById
}