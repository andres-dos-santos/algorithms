let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function linear_search(target) {
  for (let i = 0; i < list.length; i++) {
    if (target === list[i]) {
      return `${target} está na posição ${i}`
    }
  }
}

console.log(linear_search(4))