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

wordslist = []

def fizzmaker():
  check = input("Would you like to add some words and numbers to the game? Y for yes, N for no: ")
  if check == "N" or check == "n":
    return
  num = input("What number would you like to add? ")
  word = input("What word would you like to add? ")
  wordslist.append([int(num), word])
  fizzmaker()

fizzmaker()

fizzgame = Fizzy(wordslist)

fizzgame.playgame(40)