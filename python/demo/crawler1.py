
# coding=UTF-8
from selenium import webdriver


"""
browser = webdriver.Chrome()
browser.get("http://www.baidu.com")
print browser.title 
browser.find_element_by_id("kw" ).send_keys( "selenium")
browser.find_element_by_id("su").click()
print browser.title 
browser.maximize_window() 
browser.quit()
"""

import time

driver = webdriver.Chrome()
driver.get("http://www.youdao.com")

# ���cookie��Ϣ
cookie= driver.get_cookies()

#�����cookie����Ϣ��ӡ
print cookie

driver.quit()