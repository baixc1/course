import time
import sys
import queue
from multiprocessing.managers import BaseManager


class QueueManager(BaseManager):
    pass


QueueManager.register('get_task_queue')
QueueManager.register('get_result_queue')

server_addr = '127.0.0.1'
m = QueueManager(address=(server_addr, 5000), authkey=b'abc')
m.connect()
task = m.get_task_queue()
result = m.get_result_queue()

for i in range(10):
    try:
        n = task.get(timeout=1)
        r = '%d * %d = %d' % (n, n, n**2)
        time.sleep(1)
        result.put(r)
    except Queue.Empty:
        print('task queue is empty')

print('worker exit')