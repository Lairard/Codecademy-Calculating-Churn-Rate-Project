hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0
for item in prices:
  total_price += item
print(total_price)

average_price = total_price / len(prices)
print("Average Haircut Price: " + str(average_price))

new_prices = [price - 5 for price in prices]
print(new_prices)
newhairprice = list(zip(hairstyles, new_prices))
print(newhairprice)

total_revenue = 0
ranger = range(len(hairstyles))
print(ranger)
for i in ranger:
  total_revenue += prices[i] * last_week[i]

# The codes below returned the same answer as above
print("Total Revenue: " + str(total_revenue))
multi = [a * b for a, b in zip(prices, last_week)]
print(multi)

empty = 0

for i in multi:
  empty += i

print(empty)
# End of alternative codes

average_daily_revenue = total_revenue / 7
print(average_daily_revenue)

cuts_under_30 = [hairstyles[i] for i in ranger if new_prices[i] < 30]
print(cuts_under_30)
