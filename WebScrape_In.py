# -*- coding: utf-8 -*-
"""
Created on Sun Feb  7 00:25:24 2021

@author: chanu
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
#from selenium.webdriver.common.keys import Keys


options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')  # Last I checked this was necessary.

key = "Moratuwa"    # What to search

path = "C:\Program Files\chromedriver.exe"
driver = webdriver.Chrome(path, options=options)
driver.get("https://www.lankapropertyweb.com/sale/index.php?searchbox=" +key +"&location=Western_"+ key +"%23362e373739343830%2337392e383837303031&max=&search_area=&type=&search=1")

driver.execute_script("window.scrollTo(0, document.body.scrollHeight)") # to get to the bottom of the page

items = driver.find_elements_by_css_selector(".item")
count = 0 
for i in items:
    price = items.find_element_by_css_selector(".priceList").text
    print(price)
    count =+ 1
    
print(count)

