# def fib(max):
#     n, a, b = 0, 0, 1
#     while n < max:
#         print(b)
#         a, b = b, a+b
#         n = n+1
#     return 'done'


# fib(10)

# def fib(max):
#     n,a,b = 0,0,1
#     while n<max:
#         yield b
#         a,b = b,a+b
#         n = n+1
#     return 'done'
# for i in fib(5):
#     print(i)

def triangles():
    p = [1]
    while True:
        yield p
        p = [1] + [p[x]+p[x+1] for x in range(len(p)-1)] + [1]

n = 0
for j in triangles():
    print(j)
    n = n+1
    if n == 10:
        break