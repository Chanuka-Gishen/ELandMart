# -*- coding: utf-8 -*-
"""
Created on Sun Feb  7 00:25:24 2021

@author: chanu
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys


options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')  # Last I checked this was necessary.

path = "C:\Program Files\chromedriver.exe"
driver = webdriver.Chrome(path, options=options)

def propertyWebLankan_Scrape():
    driver.get("https://www.lankapropertyweb.com/")
    driver.execute_script('window.scrollTo(0,document.body.scrollHeight)')
    key = 'moratuwa'
    search_tab = driver.find_element_by_class_name('form-control')
    search_tab.send_keys(key)
    search_tab.send_keys(Keys.ENTER)
    listOfLinks = []
    count = 0 

    productInfoList = driver.find_elements_by_class_name('thumbnail')
    for el in productInfoList:
        pp1 = el.find_element_by_tag_name('h4')
        pp2 = pp1.find_element_by_tag_name('a')
        listOfLinks.append(pp2.get_property('href'))
        print(pp2.get_property('href'))
        count = count + 1
      

    print(count)
        
 
propertyWebLankan_Scrape()

def ikmanLK_Scrape():
    driver.get("https://ikman.lk/en/ads/sri-lanka/houses")
    driver.execute_script('window.scrollTo(0,document.body.scrollHeight)')
    key = 'moratuwa'
    searchTab_ikmanlk = driver.find_element_by_class_name('search-input--1sXwU')
    searchTab_ikmanlk.send_keys(key)
    searchTab_ikmanlk.send_keys(Keys.ENTER)
    listOfLinks_ikmanlk = []
    
    adInfoList_ikmanlk = driver.find_elements_by_class_name('normal--2QYVk')
    for al in adInfoList_ikmanlk:
        ikmanlk_pp1 = al.find_element_by_tag_name('a')
        listOfLinks_ikmanlk.append(ikmanlk_pp1.get_property('href'))
        print(ikmanlk_pp1.get_property('href'))


