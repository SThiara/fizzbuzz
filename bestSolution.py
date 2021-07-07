import time

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
      time.sleep(0.25)

def fizzmaker():
  wordslist = []
  check = "Y"
  while check == "Y" or check == "y":
    num = input("What number would you like to add? ")
    word = input("What word would you like to add? ")
    wordslist.append([int(num), word])
    check = input("Would you like to add some more words and numbers to the game? (Y/N)")
  return Fizzy(wordslist)

fizzgame = fizzmaker()

game = "Y"

while game == "Y" or game == "y":
  num = input("What number will this game go up to?")
  fizzgame.playgame(int(num))
  game = input("Would you like to play again?")

print("All done!")
