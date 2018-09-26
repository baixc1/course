# 是否是闰年
# 1. 能整除4且不能整除100
# 2. 能整除400
while True:
    year = int(input('请输入年份'))
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        print('is leap year')
    else:
        print('is not leap year')
