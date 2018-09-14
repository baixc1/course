# 5.3.3. fromKeys

# seq = ('name','age','sex')
# info = dict.fromkeys(seq)
# print("新字典：%s" % info)
# info = dict.fromkeys(seq,10)
# print("新字典：%s" % info)

#5.3.4. get

# stu = {'小萌': 1001, '小智': 2001}
# print(stu.get('小萌'))
# print(stu.get('小明'))        #no error

#5.3.5 key in dict

# stu = {'小萌': 1001, '小智': 2001}
# print('小智' in stu)
# print('小明' in stu)

#5.3.6 items

# stu = {'小萌': 1001, '小智': 2001}
# items = stu.items()
# print(items)
# print(type(items))

#5.3.7 keys

# stu = {'小萌': 1001, '小智': 2001}
# keys = stu.keys()
# print(keys)
# print(type(keys))

#5.3.8 setdefault

# stu = {'小萌': 1001, '小智': 2001}
# print('小强的键值为：%d' % stu.setdefault('小红', 2002))
# print('小萌的键值为：%s' % stu.setdefault('小萌', "1002"))       #invalid
# print('小萌的键值为：%s' % stu.setdefault('小萌'))
# print(stu)

#5.3.9 update

# stu = {'小萌': 1001, '小智': 2001}
# stu2 = {'小红': 1002, '小智': 2002}
# print(stu.update(stu2))
# print(stu)

#5.4.0 values

# stu = {'小萌': 1001, '小智': 2001, '小红': 1000, '小黄': 1001}
# vals = stu.values()
# print(vals)

# dict = {"a": "1"}
# print(dict)
# dict["a"] = 1
# print(dict)

#6.2.1 import

# import sys
# print('Python搜索路径：%s' % sys.path)
#
# import math
# print(math.pi)
# print(math.cos(0))
#
# from math import pi,cos
# print(pi)
# print(cos(0))
#
# from math import *
# print(sin(0))
#
# import math as m
# print(m.pi)

# 6.3.1序列解包

# x,y,z = 1,2,3
# print(x,y,z)
#
# x,y,z = y,z,x
# print(x,y,z)

# nums = 1,2,3
# print(nums)
# x,y,z = nums
# print(x,y,z)

# stu = {'小萌': 1001, '小智': 2001, '小红': 1000, '小黄': 1001}
# tuple = key,value = stu.popitem()
# print(key)
# print(tuple)

#6.5.6 is   同一性

# x = [1,2,3]
# z = [1,2,3]
# print(x == z)
# print(x is z)
# print(x is not z)
#
# num = 5
# print(3<=num<=5)
# print(1<=num<=3)

#6.5.7 断言 assert

# x = 1
# y =1
# assert x > 0, "x is zero or negative"
# assert y % 2 == 0, "y is not an even"

#6.6.1 while

# n = 1
# while n <= 6:
#     print(n)
#     n += 1
# print("over %d" % n)

#6.6.2 for
fields = ['a','b','c']
for f in fields:
    print(f)