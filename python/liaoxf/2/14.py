import time
import threading


def print_thread_name(s='loop'):
    print(s, threading.current_thread().name)


def loop():
    print_thread_name()


t = threading.Thread(target=loop, name='LoopThread')

print_thread_name(s='start')

t.start()
t.join()

print_thread_name(s='end')
