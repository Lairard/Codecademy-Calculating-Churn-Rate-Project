toppings = ['Pepperoni', 'Pineapple', 'Cheese', 'Sausage', 'Olives', 'Anchovies', 'Mushrooms']
prices = [2, 6, 1, 3, 2, 7, 2]

num_pizzas = len(toppings)
print('We sell ' + str(num_pizzas) + ' different kinds of pizza!')

pizzas = list(zip(prices, toppings))
print(pizzas)
pizzas.sort()
cheapest_pizza = pizzas[0]
priciest_pizza = pizzas[-1]
three_cheapest = pizzas[:3]
print(three_cheapest)
print(prices.count(2))