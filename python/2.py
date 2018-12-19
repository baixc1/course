#!/usr/bin/env python
# with_example01.py

class Sample:
    n = 0
    def __enter__(self):
        print ("In __enter__()")
        return "Foo"

    def __exit__(self, type, value, trace):
        print("In __exit__()")


def get_sample():
    return Sample()


with get_sample() as sample:
    print("sample:", sample)

s1 = Sample()
s2 = Sample()
s1.n = 2
print(s2.n)
print(s1.n)