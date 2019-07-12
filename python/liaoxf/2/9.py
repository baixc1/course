import pickle
# f = open('1.txt','wb')
# pickle.dump(11,f)
# f.close()

f = open('1.txt','rb')
d = pickle.load(f)
f.close()
print(d)
