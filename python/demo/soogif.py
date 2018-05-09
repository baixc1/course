#!/usr/bin/python
#coding:utf-8

import urllib2
import json
import requests
from bs4 import BeautifulSoup
import re

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

baseUrl = "http://soogif.com"
startUrl = "http://soogif.com/sort/124"

str1 = "http://soogif.com/material/query?query="
str2 = "&sortField=&start=0&size=50"

file = open('Tsoogif.txt','w')


def fun(url,flag):
	try:
		html = urllib2.urlopen(url)							#file-like object
		soup = BeautifulSoup(html,'lxml')					#document object
		type = 'href'										#tag attr which will get
		
		if flag==1:
			content = soup.find("div","left clearfix")
			a =  content.find_all("a")				#a tag object
			
		elif flag == 2:
			content = soup.find("div","up clearfix")
			a = content.find_all("a",href=re.compile("search"))
		

		for n in range(len(a)):
			if flag == 2:
				text = str1 + a[n].get(type)[8:] + str2	
			else:
				text = baseUrl + a[n].get(type)				#get href
			print text
			file.write(text+'\n')							#href write in file
			if flag == 1:									#recursive call
				fun(text, 2)								
			if flag == 2:
				fun_get(text)
	except Exception,e:
		print e
	finally:
		pass

def fun_get(url):
	try:
		content = requests.get(url)
		list = content.json()['data']['list']
		for x in xrange(len(list)):
			download_url = "http://www.soogif.com/download/0/" + list[x]["sid"]
			tags = list[x]["subText"].replace(" ",",")
			file.write(download_url+'\n')
			print tags
			print (download_url,tags)
	except Exception,e:
		print e
	finally:
		pass

fun(startUrl,1)
file.close()