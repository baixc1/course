import os

def find_file(path, s):
    for d in os.listdir(path):
        curPath = os.path.join(path, d)
        if os.path.isfile(curPath) and s in d:
            print(curPath)
        if os.path.isdir(curPath):
            find_file(curPath,s)

find_file('.','react-dom')