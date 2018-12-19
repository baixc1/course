from qiniu import Auth

import subprocess as sp


qa = Auth('-', '-')


tmp_dir = '/tmp/17-getfun-crawler'
sp.run(['mkdir', '-p', tmp_dir])