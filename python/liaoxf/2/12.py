from multiprocessing import Pool
import os
import time
import random


def task(name):
    print('%s task start: %s' % (name, os.getpid()))
    start = time.time()
    time.sleep(1+random.random()*3)
    end = time.time()
    print('%s task end: %.2f seconds' % (name, end-start))


if __name__ == '__main__':
    print(os.getpid())
    p = Pool(20)     #Pool Max 
    for i in range(20):      
        p.apply_async(task, args=(i,))
    print('sync')
    p.close()
    p.join()
    print('all done')
