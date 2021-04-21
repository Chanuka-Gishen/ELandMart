# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 13:50:36 2021

@author: chanu
"""

import json
import csv

with open("Galle_Information_sheet1.csv", "r") as g:
    reader = csv.reader(g)
    next(reader)
    data = []
    lanesData = []
    count = 0
    for record in reader:
        name = record[1]
        if name not in data:
            lanesData.append(name)
    
    list(set(lanesData))
    for item in list(set(lanesData)):
        data.append({"lane":item})
    

with open("lanes.json", "w") as la:
    json.dump(data, la, indent = 4)    