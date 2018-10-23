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

# 7.12 偏函数

# from functools import partial
#
# def mod(n,m):
#     return n % m
#
# mod_by_100 = partial(mod, 100)
#
# print(mod_by_100(7))  #mod(100,7)

# 7.13快速排序

#排序函数，第一次排序
# def quicksort(L):
#     qsort(L,0,len(L)-1)
#
# #排序函数，递归排序
# def qsort(L,first,last):
#     #first >= last 终止递归
#     if first < last:
#         #排序，返回中间部分下标
#         split = partition(L,first,last)
#         #左部分排序,first到split-1个
#         qsort(L,first,split-1)
#         #右部分排序
#         qsort(L,split+1,last)
#
# def partition(L,first,last):
#     #选取列表第first个元素为划分元素
#     pivot = L[first]
#     #左起始查询位置
#     leftmark = first + 1
#     #右起始查询位置
#     rightmark = last
#     #循环归位left部分和right部分
#     while True:
#         #从左向右，找比pivot大的值
#         while L[leftmark] < pivot:
#             #限制查找范围，避免越界
#             if leftmark == rightmark:
#                 break
#             leftmark += 1
#
#         #从右向左，找比pivot小的值
#         while L[rightmark] > pivot:
#             rightmark -= 1
#
#         #左右查找未相交，继续查找
#         if leftmark < rightmark:
#             L[leftmark],L[rightmark] = L[rightmark],L[leftmark]
#
#         #该次查询完毕
#         else:
#             break
#
#     #划分元素放到中间部分，rightmark下标值小于pivot
#     L[first],L[rightmark] = L[rightmark],L[first]
#     return rightmark
#
# arr_sort = [5,6,10,1,2,3,4]
# quicksort(arr_sort)
#
# print(arr_sort)

#(1)
# num = 15
# print('num的16进制：'+hex(num)[-1])

#(2)
# import math
# def quadratic(a,b,c):
#     return (-b+math.sqrt(b**2-4*a*c))/2*a,(-b-math.sqrt(b**2-4*a*c))/2*a
#
# print(quadratic(3,2,-1))

#(3)
# def mostLetter(str):
#     str_list = list(str)
#     obj = {}
#     n = 0
#     for n in str:
#         low = n.lower()
#         if 97 <= ord(low) <= 122:
#             obj[low] = str_list.count(n.upper()) + str_list.count(low)
#
#     max = ''
#     maxs = ''
#     for i,j in obj.items():
#         if max == '':
#             maxs = i
#             max = j
#         else:
#             if j > max:
#                 maxs = i
#                 max = j
#             elif j == max:
#                 if ord(i) < ord(maxs):
#                     maxs = i
#                     max = j
#     return maxs
# print(mostLetter('one 11111noe'))

# 8.2 类的定义和使用

# class MyClass:
#     i = 0
#     def __init__(self,name):
#         self.i = name
#     def f(self):
#         return 'hello world'
#
# use_class = MyClass('2')
# print(use_class.i,use_class.f())

# class Student:
#     def __init__(self,name,score):
#         self.name = name
#         self.__score = score
#
#     def info(self):
#         print('学生： %s; 分数： %s' % (self.name,self.__score))
#
#     def set_score(self,score):
#         self.__score = score
#
#     def __foo(self):
#         print('这是私有方法')
#
# stu = Student('xiaoming', 90)
#
# stu.info()
# stu.name = 'xiaohong'
# stu.__score = 0
#
# stu.info()
# stu.set_score('80')
# stu.info()
# stu.__foo()

#8.4 继承 + 多态
# class Animal:
#     def run(self):
#         print('Animal is runing')
#
#     def __run(self):
#         print('i am a private method')
#
# class Dog(Animal):
#     pass
#
# class Cat(Animal):
#     pass
#
# dog = Dog()
# dog.run()
# # dog.__run()
#
# print(isinstance(dog,Dog))
# print(isinstance(dog,Animal))
#
# def run_two_times(animal):
#     animal.run()
#     animal.run()
#
# class Bird(Animal):
#     def run(self):
#         print('Bird Fly')
#
# run_two_times(Bird())


#8.7多重继承
# class Animal:
#     pass
#
# #大类
# class Mammal(Animal):
#     pass
#
# class Bird(Animal):
#     pass
#
# #各种动物
# class Dog(Mammal):
#     pass
#
# class Bat(Mammal):
#     pass
#
# class Parrot(Bird):
#     pass
#
# class Ostrich(Bird):
#     pass
#
# class Runnable:
#     def run(self):
#         print('Running...')
#
# class Flyable:
#     def fly(self):
#         print('Flying...')
#
# class Dog(Mammal,Runnable):
#     pass

# 8.8获取对象信息
#type()
# print(type(type(1)))
#
# import types
# def fun():
#     pass
# print(type(fun))
# print(types.FunctionType)

#isinstance()
# class Animal:
#     pass
#
# print(isinstance(Animal(), object))
# print(isinstance([1,2,3],list))
# print(isinstance(1.0,float))

#dir()
# print(dir(1))

#8.8 类的专有方法
# class Student:
#     def __init__(self,name):
#         self.name = name
#
#     def __str__(self):
#         return self.name
#
# stu = Student('xiaoli')
# print(stu)

# class Fib:
#     def __init__(self):
#         self.a,self.b = 0,1
#
#     def __iter__(self):
#         return self
#
#     def __next__(self):
#         self.a,self.b = self.b,self.a+self.b
#         if self.a > 100000:
#             raise StopIteration()
#         return self.a
#
# fib = Fib()
# for n in fib:
#     print(n)

# class WeatherSearch:
#     def __init__(self,input_daytime):
#         self.input_daytime = input_daytime
#
#     def search_visibility(self):
#         visible_leave = 0
#         if self.input_daytime == 'daytime':
#             visible_leave = 2
#         if self.input_daytime == 'night':
#             visible_leave = 9
#         return visible_leave
#
#     def search_temperature(self):
#         temperature = 0
#         if self.input_daytime == 'daytime':
#             temperature = 26
#         if self.input_daytime == 'night':
#             temperature = 16
#         return temperature
#
# class OutAdvice(WeatherSearch):
#     def __init__(self,input_daytime):
#         WeatherSearch.__init__(self,input_daytime)
#
#     def search_temperature(self):
#         vehicle = ''
#         if self.input_daytime == 'daytime':
#             vehicle = 'bike'
#         if self.input_daytime == 'night':
#             vehicle = 'taxi'
#         return vehicle
#
#     def out_advice(self):
#         visible_leave = self.search_visibility()
#         if visible_leave == 2:
#             print('good weather %s' % self.search_temperature())
#         elif visible_leave == 9:
#             print('bad weather %s' % self.search_temperature())
#         else:
#             print('no scope')
#
# check = OutAdvice('daytime')
# check.out_advice()


# class Animal:
#     def __init__(self,name):
#         self.name = name
#
#     def showName(self):
#         print('i am %s' % self.name)
#
#     def showType(self):
#         print('%s is animal' % self.name)
#
# class Mammal(Animal):
#     def showType(self):
#         print('%s is a mammal' % self.name)
#
# class Bird(Animal):
#     def showType(self):
#         print('%s is a bird' % self.name)
#
# class Fly:
#     def action(self):
#         print('i can fly')
#
# class Run:
#     def action(self):
#         print('%s can run' % self.name)
#
# class Dog(Mammal,Run):
#     def showType(self):
#         print('%s is a dog' % self.name)
#
# class Bat(Mammal,Fly):
#     pass
#
# class Parrot(Bird):
#     pass
#
# class Ostrich(Bird):
#     pass
#
# dog = Dog('gougou')
# dog.showName()
# dog.action()
# dog.showType()
#
# bat = Bat('bb')
# bat.showName()
# bat.action()
# bat.showType()

#9 异常
# raise Exception

# raise NameError('This is NameError')

# try:
#     raise NameError('this is NameError')
# except NameError:
#     print('a NameError happened')
#     raise

#捕捉对象
# def model_exception(x,y):
#     try:
#         b = name
#         a = x/y
#     except(ZeroDivisionError,NameError,TypeError) as e:
#         print(e)
# model_exception(2,0)

# class MyError(Exception):
#     def __init__(self):
#         pass
#     def __str__(self):
#         return 'this is self define error'
#
# def my_error_test():
#     try:
#         raise MyError()
#     except Exception as e:
#         print(e)
#
# my_error_test()

#日期和时间
# import time
# print(time.time()/3600/24/365)
#
# print(time.localtime())
# print(time.gmtime())
# print(time.time())
# print(time.mktime(time.gmtime()))
# print(time.mktime((2018,10,18,0,54,25,3,291,0)))
# print(time.asctime(time.localtime()))
# print(time.time())
# print(time.perf_counter())
# time.sleep(5)
# print(time.time())
# print(time.perf_counter())

# 10.3datetime模块
# import datetime
# print(datetime.datetime.today())
# print(datetime.datetime.now())
# print(datetime.datetime.utcnow())

# import time,datetime
# print(datetime.datetime.fromtimestamp((time.time())))
# print(datetime.datetime.utcfromtimestamp((time.time())))
# from datetime import datetime as d
# print(type(d.now()))
# print(type(d.strptime(str(d.now()),'%Y-%m-%d %H:%M:%S.%f')))
# print(d.now().strftime('%Y-%m-%d %H:%M:%S'))

# from datetime import datetime as dt
# now = dt.now()
# print(now)
# print(type(now))
# print(now.strftime('%a'))
# print(now.strftime('%Y'))

#re模块
# import re
# print(re.match('hello','hello world').span())
# print(re.match('world','hello world'))
# print(re.search('hello','hello world').span())
# print(re.search('wor','hello world').span())

# import re
# line = 'Cats are smarter dogs than dogs'
#
# matchObj = re.search('dogs',line,re.M|re.I)
# print(matchObj.group(0))
# print(matchObj.groups())

# import re
# print(re.match(r'^(\d+?)(0*)$','102300').group())
# print(re.match(r'^(\d*?)(0*)$','102300').group(1))
# print(re.match(r'^(.*?)(0*)$','102300').group(2))
# print(re.match(r'^(.*?)(0*)$','102300').groups())
# print(re.match(r'(\d+?)(0+)','11200300').groups())
# print(re.match(r'(\d+?)(0+?)','11200300').groups())

#11.4 替换
# import re
# phone = '2000-22-58 # 这是外国的手机号'
# print(re.sub(r'#.*','',phone))
# print(re.sub(r'\D','',phone))
#
# re_phone = re.compile(r'#.*$')
# print(re_phone.sub('',phone))

#12.1 打开文件
# path = '1.py'
# print(open(path).name)
# path = './test.txt'
# print(open(path,'w').name)
# open('2.txt','w')

#I/O 内存-磁盘/网络 Stream
# path = 'test.txt'
# print(open(path,'r').read())
# print(open(path,'w').write('054321'))
# print(open(path,'r').read())
# print(open(path,'a').write('9876'))
# print(open(path,'r').read())

# print(open(path,'a').write('\nabc'))
# print(open(path,'r').read())

#12.2.2 读写行
path = 'test.txt'
# print(open(path,'r').readline())
# print(open(path,'r').readlines(100))
str_list = ['Hello world!\n','welcome!\n','welcome!\n']
# print(open(path,'w').writelines(str_list))
# print(open(path,'r').read())
# print(open(path,'r').readlines())

# f_name = open(path,'w')
# print(f_name.writelines(str_list))
# f_name = open(path,'r')
# print(f_name.read())
# f_name = open(path,'r')
# print(f_name.readlines())
# f_name.close()

# with open(path,'w') as f:
#     f_name = open(path,'w')
#     print(f_name.write('Hello world'))

#12.2.4 文件重命名
# import os
# open('./test1.txt','w')
# os.rename('test1.txt','test2.txt')
# os.remove('test2.txt')

# open('test.txt','w').write('hello\nworld')
# print(open('test.txt','r').read(100))
# print('='*50)
# print(open('test.txt').readline(100))
# print('='*50)
# print(open('test.txt').readline(-1))
# print('='*50)
# print(open('test.txt').readline())

# import fileinput
# path = 'test.txt'
# for line in fileinput.input(path):
#     print('line is ',line)

# f_name = open(path)
# for line in f_name:
#     print('line is',line)
#
# f_name.close()

# from io import StringIO

# io_val = StringIO()
# io_val.write('hello 1')
# print(io_val.getvalue())

# io_val = StringIO('Hello\nworld\nwelcome')
# print(io_val.readline())
# print(io_val.readline())
# print(io_val.readline())
# print('='*50)
# print(io_val.readline())
# print('='*50)
# print(io_val.readline())
# print('='*50)
# print(io_val.readline())
# print('='*50)

# 12.5 序列化与反序列化
#pickle
# import pickle
# d = dict(name='xiao zhi',num=1002)
# print(pickle.dumps(d))
# f_name = open('dump.txt','wb')
# pickle.dump(d,f_name)
# f_name.close()
#
# try:
#     f_name = open('dump.txt','rb')
#     print(pickle.load(f_name))
# finally:
#     f_name.close()

#JSON
# import json
# data = {'num': 1002,'name': 'xiao ming'}
# json_str = json.dumps(data)
# print(data,json_str)
#
# print('='*50)
# data2 = json.loads(json_str)
# print(data2)
#
# with open('dump.txt','w') as f:
#     json.dump(data,f)

# with open('dump.txt','r') as f:
#     data = json.load(f)
#
# print(data)

#12.6 调试
# str_val = '1 2\t 3\n 4  5  6'
# # print(str_val)
# # print(repr(str_val))

#练习
#迭代
path = './test.txt'
# f_name = open(path,'w')
# print(f_name.write('Hello w\nddddd'))
# f_name = open(path)
#每次向后读一个
# print(f_name.read(1))
# print(f_name.read(1))

#读取行
# f_name = open(path)
# print('='*50)
# print(f_name.readline())
# print(f_name.readline(2))
# f_name = open(path)
# print(f_name.readline(4))

#文件对象迭代
# f_name = open(path)
# for line in f_name:
#     print('='*40)
#     print(line)

#诗
# import re
# path = 'poem.txt'
#写诗
# def write_poem(path):
#     f_name = open(path,'w',encoding='utf8').write('\t一四七\n一二三四五六七，\n七六五四三二一。')
#
# write_poem('test.txt')

#替换文件中某字
# def replace_text(path,old,new):
#     f_str = open(path,encoding='utf8').read()
#     f_str = f_str.replace(old,new)
#     open(path,'w',encoding='utf8').write(f_str)
#
# replace_text(path,'四','九')

#计算文件中中文各字出现频率
# def frequency(inPath,outPath):
#     dict = {}
#     f_str = open(path,encoding='utf8').read()
#     for i in f_str:
#         if '\u4e00' <= i <= '\u9fff':
#             if i in dict:
#                 dict[i] += 1
#             else:
#                 dict[i] = 0
#     out_str = ''
#     for i,j in dict.items():
#         out_str += i + ':' + str(j) + '\n'
#     open(outPath,'w',encoding='utf8').write(out_str)
#
# frequency(path,'dump.txt')



