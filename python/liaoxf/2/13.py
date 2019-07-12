import subprocess

r = subprocess.call(['nslookup','www.python.org'])

print(r)