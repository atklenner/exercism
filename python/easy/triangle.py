def equilateral(sides):
    return sides[0] == sides[1] == sides[2] > 0


def isosceles(sides):
    sides.sort()
    return sides[1] == sides[2] >= sides[0]


def scalene(sides):
    no_equal_sides = sides[0] != sides[1] and sides[1] != sides[2] and sides[0] != sides[2]
    triangle_inequality = sides[0] + sides[1] >= sides[2] and sides[2] + sides[1] >= sides[0] and sides[0] + sides[2] >= sides[1]
    return no_equal_sides and triangle_inequality
