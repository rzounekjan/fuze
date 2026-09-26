import json
import re

# Load parsed official items
official_food = []
with open('tmp/food_en_parsed.txt') as f:
    for line in f:
        if line.startswith('ITEM:'):
            m = re.match(r'ITEM:\s*name=\"(.*?)\"\s*\|\s*weight=\"(.*?)\"\s*\|\s*allergens=\"(.*?)\"\s*\|\s*price=\"(.*?)\"\s*\|\s*desc=\"(.*?)\"', line)
            if m:
                official_food.append(m.groups())

official_drinks = []
with open('tmp/drinks_en_parsed.txt') as f:
    for line in f:
        if line.startswith('ITEM:'):
            m = re.match(r'ITEM:\s*name=\"(.*?)\"\s*\|\s*weight=\"(.*?)\"\s*\|\s*allergens=\"(.*?)\"\s*\|\s*price=\"(.*?)\"\s*\|\s*desc=\"(.*?)\"', line)
            if m:
                official_drinks.append(m.groups())

print(f"Official food items: {len(official_food)}")
print(f"Official drinks items: {len(official_drinks)}")
