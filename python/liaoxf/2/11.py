from multiprocessing import Process
import os

if __name__ == '__main__':
    print(os.getpid())
    p = Process(target=lambda x:print(os.getpid()),args=(1,))
    print('start')
    p.start()
    # p.join()
    print('end')