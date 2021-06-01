class Fizzy {
  constructor(arr) {
    this.numsToCheck = arr
  }

  playGame(num) {
    for (let i = 1; i <= num; i++) {
      let output = "";
      for (const pair of this.numsToCheck) {
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

const gameMaker = (gameName, gameParams) => {
  if (gameName.toLowerCase() === "fizzbuzz") {
    const arr = [];
    for (const key in gameParams) {
      arr.push([gameParams[key], key])
    }
    arr.sort((a, b) => a[0] - b[0])
    return new Fizzy(arr)
  }
  throw "Unsupported game type!"
}

const testFizz = gameMaker("FizzBuzz", {
  "Fizz": 3,
  "Buzz": 5,
  "Gozz": 7
})

testFizz.playGame(105);