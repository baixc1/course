import functools


def log(params=None):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kw):
            print("%s begin call" % fn.__name__)
            if isinstance(params, str):
                print("参数：%s" % params)
            func = fn(*args, **kw)
            print("%s end call" % fn.__name__)
            return func
        return wrapper

    if not callable(params):
        return decorator        #None str
    return decorator(params)     #fun


@log
def f():
    print("f go")


@log()
def d():
    print("d go")


@log('aaa')
def c():
    print('c go')


f()
d()
c()