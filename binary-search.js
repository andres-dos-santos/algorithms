const list = [1, 2, 3, 4, 5, 6, 7, 8];

function binarySeach(target) {
  let left = 0
  let right = list.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (list[mid] === target) {
      return mid
    }

    if (list[mid] <= target) {
      left = list[mid] + 1
    } else {
      right = list[mid] - 1
    }
  }

  return -1
}

console.log("1: ", binarySeach(2))
console.log("2: ", binarySeach(6))