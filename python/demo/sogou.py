#!/usr/bin/python
#coding:utf-8

import urllib2
import json
import requests
from bs4 import BeautifulSoup
import re

baseUrl = "http://pic.sogou.com"
startUrl = "http://pic.sogou.com/pic/emo/"

file = open('Tsogou.txt','w')


def fun(url,flag):
	try:
		html = urllib2.urlopen(url)							#file-like object
		soup = BeautifulSoup(html,'lxml')					#document object
		type = 'href'										#tag attr which will get
		
		if flag==1:
			div = soup.find("div","classify-top-fixed")
			a = div.find_all("a",href=re.compile("pic"))	#a tag object
		elif flag == 2:
			a = soup.find_all("a","emo-tit-recall")
		elif flag == 3:
			section = soup.find("section","stkrelate")
			a = section.find_all("img")
			type = 'rsrc'

		for n in range(len(a)):
			text = baseUrl + a[n].get(type)					#get href
			print text
			file.write(text+'\n')							#href write in file
			if flag < 3:									#recursive call
				fun(text, flag+1)								
			print flag
	except Exception,e:
		print e
	finally:
		pass


fun(startUrl,1)
file.close()