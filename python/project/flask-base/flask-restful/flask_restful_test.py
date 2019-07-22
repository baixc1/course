#!/usr/bin/env python
# -*- coding: utf-8 -*-
# by vellhe 2017/7/9
from flask import Flask, session
from flask_restful import reqparse, abort, Api, Resource
import sqlite3 as sql
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from datetime import timedelta

app = Flask(__name__)
api = Api(app)
app.secret_key = '1111'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(seconds=10)

TODOS = {
    'todo1': {'task': 'build an API'},
    'todo2': {'task': '哈哈哈'},
    'todo3': {'task': 'profit!'},
}

result = {
    'data': '',
    'msg': '',
    'status': 1
}


resultError = {
    'data': '',
    'msg': '错误',
    'status': 0
}


def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))


parser = reqparse.RequestParser()
parser.add_argument('task1')
parser.add_argument('username')
parser.add_argument('password')
parser.add_argument('id')
parser.add_argument('token')
parser.add_argument('score')


# # 操作（put / get / delete）单一资源Todo
# shows a single todo item and lets you delete a todo item
class Todo(Resource):
    def get(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        return TODOS[todo_id]

    def delete(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        del TODOS[todo_id]
        return '', 204


# # 操作（post / get）资源列表TodoList
# shows a list of all todos, and lets you POST to add new tasks
class TodoList(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        todo_id = int(max(TODOS.keys()).lstrip('todo')) + 1
        todo_id = 'todo%i' % todo_id
        TODOS[todo_id] = {'task': args['task1']}
        return TODOS[todo_id], 201


class Register(Resource):
    def post(self):
        args = parser.parse_args()
        username = args.username
        password = generate_password_hash(args.password)
        try:
            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute(
                    "INSERT INTO user(username,password) VALUES(?, ?)", (username, password))

                con.commit()
            return result, 200
        except:
            return resultError


class Login(Resource):
    def post(self):
        args = parser.parse_args()
        username = args.username
        password = args.password
        session['username'] = username

        try:
            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute("select * from user where username=?", (username,))

                userInfo = cur.fetchone()
                if check_password_hash(password, userInfo[1]):
                    return resultError
        except:
            return resultError
        return generate_token(username), 200


def login_require(func):
    def decorator(*args, **kwargs):
        token = verify_auth_token(parser.parse_args().token)
        if token:
            return func(*args, **kwargs)
        else:
            return '未登录'
    return decorator


def generate_token(username):
    s = Serializer(app.config['SECRET_KEY'], expires_in=2000)
    return s.dumps({'id': username}).decode('ascii')


def verify_auth_token(token):
    s = Serializer(app.config['SECRET_KEY'])
    try:
        s.loads(token)
        return True
    except:
        return None


class Add(Resource):
    decorators = [login_require]

    def post(self):
        args = parser.parse_args()
        id = args.id
        score = args.score
        if not id:
            return '无 ID'
        if not score:
            return '无 score'
        with sql.connect("database.db") as con:
            cur = con.cursor()
            try:
                cur.execute("select * from list where id=?", (id,))
                if next(cur)[0]:
                    return 'ID已存在'
            except:
                pass
            cur.execute("INSERT INTO list(id,score) VALUES(?,?)", (id,score))
            con.commit()
        return '添加成功！'


class Del(Resource):
    decorators = [login_require]

    def post(self):
        id = parser.parse_args().id
        if not id:
            return '无 ID'
        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("select * from list where id=?", (id,))
            if not cur.fetchone():
                return 'ID 不存在'
            cur.execute("delete from list where id=?", (id,))
            con.commit()
        return '删除成功！'

class Update(Resource):
    decorators = [login_require]

    def post(self):
        id = parser.parse_args().id
        if not id:
            return '无 ID'
        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("select * from list where id=?", (id,))
            if not cur.fetchone():
                return 'ID 不存在'
            cur.execute("delete from list where id=?", (id,))
            con.commit()
        return '删除成功！'



# 设置路由
api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todos/<todo_id>')
api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(Add, '/add')
api.add_resource(Del, '/del')

if __name__ == '__main__':
    app.run(debug=True)
