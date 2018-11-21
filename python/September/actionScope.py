# 作用域

# 1. 块级作用域(无)
# if True:
#     a = 1
# print(a)
#
# for i in 'a':
#     b = 1
# print(b)
#
# while True:
#     c = 1
#     break
# print(c)

# 2. 函数作用域（局部作用域）

# 3. 作用域链
# a = 1
# def fun():
#     a = 2
#     print(a)
#     def fun():
#         a = 3
#         print(a)
#     fun()
# fun()

# a = 1
#
#
# def fun1():
#     print(a)
#
#
# def fun2():
#     a = 2
#     fun1()
#
#
# fun2()

a = 1


def fun1():
    print(a)


def fun2():
    a = 2
    return fun1


f = fun2()
f()