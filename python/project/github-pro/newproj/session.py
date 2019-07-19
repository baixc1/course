from flask import Flask, session, render_template, request, redirect, url_for
import os
app = Flask(__name__)
app.secret_key = '1111'


@app.route('/')
def index():
    if 'username' in session:
        username = session['username']
        return 'logined in as ' + username + ' <a href="/loginout">loginout</a>'
    return 'not logined in  <a href="/login">login</a> '

@app.route('/loginout')
def logout():
   session.pop('username', None)
   return redirect(url_for('index'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['nm']
        return redirect(url_for('index'))
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
