#!/usr/bin/python
# -*- coding: UTF-8 -*-

import threading
import urllib
from multiprocessing import pool
import re
from urllib import unquote

reg = re.compile(r'https:\/\/baike\.baidu\.com\/item\/([^\/]*).*')

class myThread(threading.Thread):  # 继承父类threading.Thread
    def __init__(self, num):
        threading.Thread.__init__(self)
        self.num = num

    def run(self):  # 把要执行的代码写到run函数里面 线程在创建后会直接运行run函数
        print_time(self.num)


def print_time(num):
    url = "http://baike.baidu.com/view/" + str(num) + ".htm"
    try:
        response = urllib.urlopen(url)
        hole_url = unquote(response.url)

        key_word = reg.match(hole_url).group(1)
        print key_word + '   ' + str(num)
    except:
        pass

p = pool.Pool(10)
#800 - 10000
# 创建新线程
for x in range(387000,390000):
    a = p.apply_async(print_time,(x,))
p.close()
p.join()

print('end')