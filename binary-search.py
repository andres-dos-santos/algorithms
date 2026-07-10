import math

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search(target):
  left = 0
  right = len(list) - 1

  while(left <= right):
    mid = math.floor((left + right) / 2)
    if (list[mid] == target):
      return mid
    
    if (list[mid] < target):
      left = mid + 1
    else:
      right = mid - 1
    
  return -1

print("1: ", binary_search(2))
print("2: ", binary_search(6))
