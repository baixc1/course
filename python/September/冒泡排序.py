import random
list_num = [x for x in range(10)]
print(list_num)
random.shuffle(list_num)
print(list_num)
for i in range(9):
    for j in range(9):
        if j < 9 - i:
            if list_num[j] > list_num[j+1]:
                list_num[j],list_num[j+1] = list_num[j+1],list_num[j]
    print(list_num)