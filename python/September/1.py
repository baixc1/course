import random
secret = random.randint(1,10)
print("-------------i love python--------------")
temp = input("猜数字")
guess = int(temp)

if guess == secret:
        print("true")

while guess != secret:
    if guess == secret:
        print("true")
    else :
        if guess > secret:
            print("big")
        else:
            print("small")
        temp = input('重输')
        guess = int(temp)
print("over")
