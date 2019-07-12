import os

print(os.getpid())
pid = os.fork()

if pid == 0:  # child
    print(os.getppid(), os.getpid())
else:  # parent
    print(os.getpid(), pid)
