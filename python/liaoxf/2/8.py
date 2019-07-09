import os
[x for x in os.listdir('.')]
[x for x in os.listdir('.') if x.find('web') != -1]
