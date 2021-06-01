class Fizzy {
  constructor(obj) {
    this.numsToCheck = obj
  }

  sortNumsToCheck(numsToCheck) {
    const arr = [];
    for (const key in numsToCheck) {
      arr.push([numsToCheck[key], key])
    }
    arr.sort((a, b) => a[0] - b[0])
    return arr
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