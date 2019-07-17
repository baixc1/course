# -*- coding: utf-8 -*-
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(('127.0.0.1', 9999))

while True:
    s.send(str(input('请输入！')).encode())
    print(s.recv(1024).decode('utf-8'))