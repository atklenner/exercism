from random import randrange

class Character:
    def __init__(self):
        self.strength = self.ability()
        self.dexterity = self.ability()
        self.constitution = self.ability()
        self.intelligence = self.ability()
        self.wisdom = self.ability()
        self.charisma = self.ability()
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        rolls = []
        for i in range(4):
            rolls.append(randrange(1, 6))
        return sum(rolls) - min(rolls)

def modifier(con):
    return (con - 10) // 2