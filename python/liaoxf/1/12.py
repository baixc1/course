# a = [1,2,3]

# for i in iter(a):
#     print(i)

# b = iter(a)
# print(next(b))
# print(b.__next__())


class MyRange(object):
    def __init__(self, end=None):
        self.start = 0
        self.end = end

    def __next__(self):
        if self.end == None:
            self.start += 2
            return self.start
        elif self.start < self.end:
            ret = self.start
            self.start += 1
            return ret
        else:
            raise StopIteration

    def __iter__(self):  # Iterable
        return self


for i in MyRange(5):
    print(i)


a = MyRange(5)
print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(a.__next__())

b = MyRange()
for i in range(20):
    print(next(b))
