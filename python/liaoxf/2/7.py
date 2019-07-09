fpath = r'../1.txt'

with open(fpath, 'r') as f:
    print(f.readline(),'----')
with open(fpath, 'r') as f:
    print(f.read(),'----')
with open(fpath, 'r') as f:
    print(f.readlines(),'----')
