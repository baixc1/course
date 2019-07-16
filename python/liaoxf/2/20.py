from datetime import datetime
formatStr = '%Y-%m-%d %H:%M:%S'
now = datetime.now()
timeStr = now.strftime(formatStr)
timeDate = datetime.strptime(timeStr,formatStr)
print(now.timestamp())
print(timeDate.timestamp())