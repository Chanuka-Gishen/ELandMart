# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 14:55:00 2021

@author: chanu
"""

import json
import csv

with open("Galle_Information_sheet1.csv", "r") as g:
    reader = csv.reader(g)
    next(reader)
    data = []
    areaData = []
    count = 0
    for record in reader:
        name = record[2]
        if name not in data:
            areaData.append(name)
    
    for item in list(set(areaData)):
        data.append({"area":item})
    

with open("areas.json", "w") as la:
    json.dump(data, la, indent = 4) 