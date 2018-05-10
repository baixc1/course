#!/usr/bin/python
#coding:utf-8

import urllib2
import requests
from bs4 import BeautifulSoup
import re
import sys
reload(sys)		#防止module报错
sys.setdefaultencoding('utf-8')

url = "http://www.51gif.cn/tag/"
file = open('T51gif.txt','w')


def fun(url,flag):
	try:
		response = requests.get(url)						#response object
		if flag == 3:										#encoding for Chinese characters
			response.encoding = "utf-8"
		html = response.text								#tag attr which will get
		soup = BeautifulSoup(html,"html.parser")
		
		if flag==1:
			div = soup.find("div","divPic")
			list = div.find_all("a")
			for n in range(len(list)):
				href = list[n].get("href")
				file.write(href+'\n')
				fun(href,2)
		elif flag == 2:
			div = soup.find("div","page")
			href = div.find_all("a")[-1].get("href")
			page = re.search(r'gif(.*?).html',href).group(1)		#match the page num
			for m in range(2,int(page)+1):
				text = url[0:len(url)-5]+ str(m) + url[-5:]
				file.write(text + '\n')
				fun(text,3)
		elif flag == 3:
			div = soup.find("div","divPic")
			list = div.find_all("img")
			for n in range(len(list)):
				file.write(list[n].get('src') + '\n' + list[n].get('alt'))
	except Exception,e:
		print e
	finally:
		pass



fun(url,1)
file.close()