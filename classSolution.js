class Fizzy {
  constructor(obj) {
    this.numsToCheck = obj
  }

  sortNumsToCheck(numsToCheck) {
    const arr = [];
    for (const key in numsToCheck) {
      arr.push([numsToCheck[key], key])
    }
    const sortedArr = [];
    const sortArray = function(array) {
      if (array.length === 0) {
        return
      }
      let minVal = array[0][0]
      let minItem = array[0]
      let index = 0
      array.forEach((item, indexOfItem) => {
        if (item[0] < minVal) {
          minVal = item[0]
          minItem = item
          index = indexOfItem
        }
      })
      sortedArr.push(minItem)
      array.splice(index, 1)
      sortArray(array)
    }
    sortArray(arr)
    return sortedArr
  }

  playGame(num) {
    const numsToCheck = this.sortNumsToCheck(this.numsToCheck);
    for (let i = 1; i <= num; i++) {
      let output = "";
      for (const pair of numsToCheck) {
        if (i % pair[0] === 0) {
          output += pair[1]
        }
      }
      if (output === "") {
        output = i
      }
      console.log(output);
    }
  }
}

const testFizz = new Fizzy({
  "Fizz": 3,
  "Buzz": 5,
  "Gozz": 7
})

testFizz.playGame(105);