
#数字字符串求armstrong
def armstrongCal(str):
    len_scope = len(str)
    sum = 0
    for i in range(len_scope):
        sum += int(str[i])**len_scope
    return sum

num = 1
while True:
    if armstrongCal(str(num)) == num:
        print('%d is an armstrong number'%num)
    num += 1

#局部变量使用前必须先赋值
# len = 4
# def fun():
#     print(len)      #UnboundLocalError: local variable 'len' referenced before assignment
#     len = 3
# fun()