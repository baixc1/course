from multiprocessing import Process, Queue
import os
import time
import random


def write(q):
    for value in [1, 2, 3, 4, 5]:
        q.put(value)
        print('w：', value)
        time.sleep(random.random())


def read(q):
    while True:
        print('r：', q.get(True))


if __name__ == '__main__':
    q = Queue()
    pw = Process(target=write, args=(q,))
    pr = Process(target=read, args=(q,))
    pw.start()
    pr.start()
    pw.join()
    pr.terminate()
