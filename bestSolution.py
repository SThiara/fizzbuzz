class Fizzy:
  def __init__(self, words_list):
    self.words_list = words_list

  def playgame(self, finalnum):
    for num in range(1, finalnum + 1):
      output = ""
      for item in self.words_list:
        if num % item[0] == 0:
          output += item[1]
      if output == "":
        output = num
      print(output)

def fizzmaker():
  wordslist = []
  check = input("Would you like to add some words and numbers to the game? Y for yes, N for no: ")
  while check == "Y" or check == "y":
    num = input("What number would you like to add? ")
    word = input("What word would you like to add? ")
    wordslist.append([int(num), word])
    check = input("Would you like to add some words and numbers to the game? Y for yes, N for no: ")
  return Fizzy(wordslist)

fizzgame = fizzmaker()

fizzgame.playgame(40)