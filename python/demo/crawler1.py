#!/usr/bin/python
#coding:utf-8

import urllib2
import json
import requests
from bs4 import BeautifulSoup
import re
import os

baseUrl = "http://pic.sogou.com"
url = "http://pic.sogou.com/pic/emo/"


def fun(url):
	try:
		list = []
		str = ''
		html = urllib2.urlopen(url)							#file-like object
		soup = BeautifulSoup(html,'lxml')					#�ĵ�����
		div = soup.find("div","classify-top-fixed")
		a = div.find_all("a",href=re.compile("pic"))		#a���Ӷ���
		
		fd = os.open('url.txt', os.O_RDWR|os.O_CREAT)		#�½���дȨ���ĵ�
		for n in range(len(a)):								
			text = baseUrl + a[n].get('href')				#��ȡhref����ֵ
			list.append(text)
			str += text+'\n'
		os.write(fd,str)									#hrefд���ļ�
	except Exception,e:
		print e
	finally:
		pass

fun(url)
	