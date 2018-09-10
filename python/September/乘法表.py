for i in range(1,10):
    for j in range(1,10):
        if(j <= i):
            print("%d * %d = %d" % (j, i, i * j) + '\t',end=" ")
    print()