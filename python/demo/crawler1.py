
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

# 获得cookie信息
cookie= driver.get_cookies()

#将获得cookie的信息打印
print cookie

driver.quit()