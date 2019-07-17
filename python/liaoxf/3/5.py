# -*- coding: utf-8 -*-

import os
import sqlite3

db_file = os.path.join(os.path.dirname(__file__), 'test.db')
if os.path.isfile(db_file):
    os.remove(db_file)

# 初始数据:
conn = sqlite3.connect(db_file)
cursor = conn.cursor()
cursor.execute(
    'create table user(id varchar(20) primary key, name varchar(20), score int)')
cursor.execute(r"insert into user values ('A-001', 'Adam', 95)")
cursor.execute(r"insert into user values ('A-002', 'Bart', 62)")
cursor.execute(r"insert into user values ('A-003', 'Lisa', 78)")


def get_score_in(low, high):
    cursor.execute(
        'select * from user where score > ? and score < ?', (low, high))
    scores = cursor.fetchall()
    scores.sort(key=lambda ele: ele[2])
    print(scores)

get_score_in(60,100)
get_score_in(60,90)
get_score_in(60,70)

cursor.close()
conn.commit()
conn.close()
