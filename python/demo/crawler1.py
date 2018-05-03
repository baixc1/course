#coding = utf-8
from selenium import webdriver
browser = webdriver.Chrome()
browser.get("http://www.baidu.com")
print browser.title 
browser.find_element_by_id("kw" ).send_keys( "selenium")
browser.find_element_by_id("su").click()
print browser.title 
browser.maximize_window() 
browser.quit()