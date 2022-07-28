# Score categories.
# Change the values as you see fit.
YACHT = "YACHT"
ONES = "ONES"
TWOS = "TWOS"
THREES = "THREES"
FOURS = "FOURS"
FIVES = "FIVES"
SIXES = "SIXES"
FULL_HOUSE = "FULL_HOUSE"
FOUR_OF_A_KIND = "FOUR_OF_A_KIND"
LITTLE_STRAIGHT = "LITTLE_STRAIGHT"
BIG_STRAIGHT = "BIG_STRAIGHT"
CHOICE = "CHOICE"


def score(dice, category):
    dice.sort()
    if category == "YACHT" and dice.count(dice[0]) == 5:
        return 50
    elif category == "ONES":
        count = dice.count(1)
        return count * 1
    elif category == "TWOS":
        count = dice.count(2)
        return count * 2
    elif category == "THREES":
        count = dice.count(3)
        return count * 3
    elif category == "FOURS":
        count = dice.count(4)
        return count * 4
    elif category == "FIVES":
        count = dice.count(5)
        return count * 5
    elif category == "SIXES":
        count = dice.count(6)
        return count * 6
    elif category == "FULL_HOUSE" and ((dice.count(dice[0]) == 2 and dice.count(dice[4]) == 3) or (dice.count(dice[0]) == 3 and dice.count(dice[4]) == 2)):
        return sum(dice)
    elif category == "FOUR_OF_A_KIND" and dice.count(dice[2]) >= 4:
        return 4 * dice[2]
    elif category == "LITTLE_STRAIGHT" and dice == [1,2,3,4,5]:
        return 30
    elif category == "BIG_STRAIGHT" and dice == [2,3,4,5,6]:
        return 30
    elif category == "CHOICE":
        return sum(dice)
    return 0