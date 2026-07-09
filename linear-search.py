list = [10, 20, 30, 40, 50]

def linear_search(target):
  for item in list:
    if item == target:
      print(f"{item} is the target.")
      return
    else:
      print(f"{item} is not the target.")

linear_search(30)
