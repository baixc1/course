# def normalize(name):
#     return name[0].upper() + name[1:].lower()
# L1 = ['adam', 'LISA', 'barT']
# L2 = list(map(normalize, L1))
# print(L2)

from functools import reduce
# def prod(L):
#     return reduce(lambda x, y: x*y, L)


# print(prod([1, 2, 3, 4, 5]))


def str2float(s):
    digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
              '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, }
    n = s.index('.')

    def str2int(s):
        return digits[s]


    iterator1 = map(str2int, s[:n])
    iterator2 = map(str2int, s[n+1:])
    multiple =  10**len(s[n+1:])
    
    def fn(i):
        return reduce(lambda x,y:x*10+y,i)
    

    return fn(iterator1) + fn(iterator2)/multiple


print(str2float('12333.42256'))
print(str2float('12333.42256') == 12333.42256)
