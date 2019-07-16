import re
from datetime import datetime, timezone, timedelta


def to_timestamp(dt_str, tz_str):
    groups = re.match(r'UTC([+-])0?(\d+):.*', tz_str).groups()
    diff = int(groups[0]+groups[1])
    cday = datetime.strptime(
        dt_str, '%Y-%m-%d %H:%M:%S') + timedelta(hours=diff)
    print(cday.timestamp())


to_timestamp('2015-6-1 08:10:30', 'UTC+7:00')
to_timestamp('2015-5-31 16:10:30', 'UTC-09:00')
