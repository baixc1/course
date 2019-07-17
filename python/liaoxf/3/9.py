def consumer():
    r = '空'
    while True:
        n = yield r
        print(n)
        r = 'ok'


def produce(c):
    print(c.send(None))     #init
    n = 0
    while n<5:
        n += 1
        print(c.send(n))
    c.close()

c = consumer()
produce(c)