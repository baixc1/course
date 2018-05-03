import requests
payload = {'key1': 'value1', 'key2': None, 'key3': ['', 'value3']}
r = requests.get('https://api.github.com/events')
r.json()
"""print(r.url)
r.encoding = 'utf-8'
print(r.text)		
print(r.encoding)
print(r.content)"""
