import sqlite3

conn = sqlite3.connect('database.db')

try:
    conn.execute('CREATE TABLE user (username text, password text,PRIMARY KEY(username))')
    conn.execute('CREATE TABLE list (id text,score int,PRIMARY KEY(id))')
except:
    pass

conn.close()
