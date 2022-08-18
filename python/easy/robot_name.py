from random import randint

class Robot:
    def __init__(self):
        self.name = self.random_name()

    def random_name(self):
        first_letter = chr(randint(65, 90))
        second_letter = chr(randint(65, 90))
        number = str(randint(100, 999))
        return first_letter + second_letter + number

    def reset(self):
        new_name = self.random_name()
        while new_name == self.name:
            new_name = self.random_name()
        self.name = new_name
