# def createCounter():
#     n = 0
#     r = [0]

#     def counter():
#         nonlocal n
#         n += 1
#         r[0] += 1
#         return r[0]
#     return counter

def createCounter():
    def generate():
        num = 0
        while True:
            num += 1
            yield num
    
    return generate().__next__

counterA = createCounter()
print(counterA(), counterA(), counterA(), counterA(), counterA())