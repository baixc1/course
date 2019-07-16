import threading, multiprocessing

length = multiprocessing.cpu_count()

def loop():
    while True:
        x = 1

for i in range(length):
    t = threading.Thread(target=loop)
    t.start()