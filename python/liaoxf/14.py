import time
import functools


def metric(fn):
    @functools.wraps(fn)
    def decorator(*args, **kw):
        print('%s executed in %s ms' % (fn.__name__, 10.24))
        return fn(*args, **kw)
    return decorator


def log(fn):
    def decorator(*args, **kw):
        print('begin call')
        fn(*args, **kw)
        print('end %s' % fn.__name__)
    return decorator


@metric
def fast(x, y):
    time.sleep(0.0012)
    return x + y


@log
def slow(x, y, z):
    time.sleep(0.1234)
    print(1111)


# f = fast(11, 22)
# s = slow(11, 22, 33)
# if f != 33:
#     print('测试失败!')
# elif s != 7986:
#     print('测试失败!')
# else:
#     print('测试成功！')

# print(metric.__name__)
# print(slow.__name__)
# slow(11, 22, 33)
