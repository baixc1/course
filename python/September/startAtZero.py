# 5.3.3. fromKeys

# seq = ('name','age','sex')
# info = dict.fromkeys(seq)
# print("新字典：%s" % info)
# info = dict.fromkeys(seq,10)
# print("新字典：%s" % info)

# 5.3.4. get

# stu = {'小萌': 1001, '小智': 2001}
# print(stu.get('小萌'))
# print(stu.get('小明'))        #no error

# 5.3.5 key in dict

# stu = {'小萌': 1001, '小智': 2001}
# print('小智' in stu)
# print('小明' in stu)

# 5.3.6 items

# stu = {'小萌': 1001, '小智': 2001}
# items = stu.items()
# print(items)
# print(type(items))

# 5.3.7 keys

# stu = {'小萌': 1001, '小智': 2001}
# keys = stu.keys()
# print(keys)
# print(type(keys))

# 5.3.8 setdefault

# stu = {'小萌': 1001, '小智': 2001}
# print('小强的键值为：%d' % stu.setdefault('小红', 2002))
# print('小萌的键值为：%s' % stu.setdefault('小萌', "1002"))       #invalid
# print('小萌的键值为：%s' % stu.setdefault('小萌'))
# print(stu)

# 5.3.9 update

# stu = {'小萌': 1001, '小智': 2001}
# stu2 = {'小红': 1002, '小智': 2002}
# print(stu.update(stu2))
# print(stu)

# 5.4.0 values

# stu = {'小萌': 1001, '小智': 2001, '小红': 1000, '小黄': 1001}
# vals = stu.values()
# print(vals)

# dict = {"a": "1"}
# print(dict)
# dict["a"] = 1
# print(dict)

# 6.2.1 import

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

# 6.5.6 is   同一性

# x = [1,2,3]
# z = [1,2,3]
# print(x == z)
# print(x is z)
# print(x is not z)
#
# num = 5
# print(3<=num<=5)
# print(1<=num<=3)

# 6.5.7 断言 assert

# x = 1
# y =1
# assert x > 0, "x is zero or negative"
# assert y % 2 == 0, "y is not an even"

# 6.6.1 while

# n = 1
# while n <= 6:
#     print(n)
#     n += 1
# print("over %d" % n)

# 6.6.2 for
# fields = ['a','b','c']
# for f in fields:
#     print(f)

# 6.6.3 for字典 序列解包
# tups = {'name': '小智','number': '1002'}
# print(tups.items())
# for i in tups:
#     print(i,tups[i])
#  v
# print("="*50)
#
# for i,j in tups.items():
#     print(i,j)

# 6.6.4 迭代工具
# 1. 并行迭代
# student = ['xiaoming','xiaohong','xiaolan']
# number = [1001,1002,1003]
# for i in range(len(student)):
#     print('%d. %s的学号是：%d'%(i+1,student[i],number[i]))

# student = ['xiaoming','xiaohong','xiaolan']
# number = [1001,1002,1003]
# for tuple in zip(student,number):
#     print(tuple)

# for t in zip(range(5),range(10)):
#     print(t)

# print(sorted([3,1,2,4]))
# print(sorted('abcABC, !"\'+-3214'))
# print(list(reversed('1324')))
# print(type(reversed('1324')))

# 6.6.5 跳出循环
# for i in range(5):
#     if (i == 1):
#         continue
#     if (i == 3):
#         pass
#         #break
#     print(i)
# else:
#     print('for循环结束')
#
# print('-' * 50)
#
# i = 10
# while (i > 0):
#     if (i == 8):
#         i -= 1
#         continue
#     if (i < 5):
#         pass
#         #break
#     i -= 1
#     print(i)
# else:
#     print('while循环结束')

# 7 函数
# help(abs)
# 7.3.2 关键字参数
# def personInfo(name,age):
#     print('%s 今年 %d'%(name,age))
#
# personInfo('xiaoming',11)
# personInfo(age=12,name='xiaodong')

# 7.3.3 默认参数
# def defaultParam(job,age=11,name=None):
#     print(job,age,name)
#
# defaultParam('show',name=2)

# 7.3.4 可变参数
# def personinfo(arg1,*vartuple1):
#     print(arg1)
#     print('-'*20)
#     for var in vartuple1:
#         print(var)
#     print('-'*50)
#     return
#
# def personinfo1(*vartuple1):
#     for var in vartuple1:
#         print(var)
#     print('-'*50)
#     return
# personinfo(1)
# personinfo(1,2,3)
# personinfo1(2,1,2,3)

# other = {'city': '北京', '爱好': '编程'}
#
#
# def personinfo(name, number, **kw):  # **处理关键字参数
#     print(name, number, kw)
#
#
# personinfo('小智', 1002, city=other['city'], 爱好=other['爱好'])
# personinfo('小智', 1002, **other)
#
# 中字 = 'my god'
# print(中字)

# 7.3.5 组合参数
# def exp(p1,p2,df=0,*vart,**kw):
#     print(p1,p2,df,vart,kw)
#
# exp(1,2)
# exp(1,2,3)
# exp(1,2,c=3)
# exp(1,2,5,5,c=3)
# exp(1,2,3,4,5,6,7,中=8,外=9)
#
# args = (1,2,3,4)
# kw = {'1':1,'2':2}
#
# exp(*args,**kw)

# 7.6.1 局部变量
# x = 0
# def fun(x):
#     print(x)
#     x =2
#     print(x)
# def fun1():
#     y = x + 1
#     print(y)
# fun(x)
# fun1()
# print(x)

# 7.6.2 全局变量
# total = 0
# def sum(a,b):
#     total = a+b
#     print(total)
#     return total
# def totalprint():
#     print(total)
#     return total
# def totalmod():
#     global total
#     total = 10
# print(sum(10,20))
# totalprint()
# print(total)
#
# totalmod()
# print(total)

# 7.9 返回函数
# def count():
#     def f(j):
#         def g():
#             return j*j
#         return g
#     fs = []
#     for i in range(1,4):
#         fs.append(f(i))
#     return fs
# f1,f2,f3 = count()
# print(f1())
# print(f2())
# print(f3())

# 7.1.0 递归函数
# import sys
# sys.setrecursionlimit(1500)
# def fact(n):
#     if n == 1:
#         return 1
#     else:
#         return n * fact(n - 1)
#
#
# print(fact(1000))

# 尾递归优化
# def fact(n):
#     return fact_iter(n, 1)
#
#
# def fact_iter(num, product):
#     if num == 1:
#         return product
#     return fact_iter(num - 1, num * product)
#
# print(fact(1000))

#7.11 匿名函数

# L1 = [10,1,2,3,4,5]
# L2 = []
# for i in L1:
#     if i>3:
#         L2.append(i)
# print(L2)

# def func(x):
#     return x>3
# f_list = filter(func,[1,2,3,4,5])
# print(f_list)
# print([item for item in f_list])
# print(f_list)
# print([item for item in f_list])

# print(list(filter(lambda x: x>3,[1,2,3,4,5,30])))

# 7.12