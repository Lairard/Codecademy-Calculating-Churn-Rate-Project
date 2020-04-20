# My own code
premium = 125

def ground_shipping(weight):
  if weight >= 10:
    return weight * 4.75 + 20
  elif weight >= 6:
    return weight * 4.00 + 20
  elif weight >= 2:
    return weight * 3 + 20
  else:
    return weight * 1.5 + 20
  
print(ground_shipping(8.4))

def drone_shipping(weight):
  if weight >= 10:
    return weight * 14.25
  elif weight >= 6:
    return weight * 12.00
  elif weight >= 2:
    return weight * 9.00
  else:
    return weight * 4.50
  
print(drone_shipping(1.5))

def costing(weight):
  if ground_shipping(weight) > drone_shipping(weight) and drone_shipping(weight) < premium:
    return print("You should ship using drone shipping, it will cost $" + str(drone_shipping(weight)))
  if drone_shipping(weight) > ground_shipping(weight) and ground_shipping(weight) < premium:
    return print("You should ship using ground shipping, it will cost $" + str(ground_shipping(weight)))
  else:
    return print("You should ship using premium ground shipping, it will cost $" + str(premium))
  
costing(4.8)
costing(231.5)

# Based on walkthrough video

def ground_shipping(weight):
  if weight >= 10:
    return weight * 4.75 + 20
  elif weight >= 6:
    return weight * 4.00 + 20
  elif weight >= 2:
    return weight * 3 + 20
  else:
    return weight * 1.5 + 20
  
print(ground_shipping(8.4))

def drone_shipping(weight):
  if weight >= 10:
    return weight * 14.25
  elif weight >= 6:
    return weight * 12.00
  elif weight >= 2:
    return weight * 9.00
  else:
    return weight * 4.50
  
print(drone_shipping(1.5))

def costing(weight):
  
  ground  = ground_shipping(weight)
  drone   = drone_shipping(weight)
  premium = 125
  
  if ground < drone and ground < premium:
    method = "Ground"
    cost   = ground
  elif drone < ground and drone < premium:
    method = "Drone"
    cost   = drone
  else:
    method = "Premium Ground"
    cost   = premium
  
  print(
    "The cheapest shipping method is $%.2f with %s shipping."
  % (cost, method)
  )
  
costing(4.8)
costing(231.5)
