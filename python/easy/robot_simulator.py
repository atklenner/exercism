EAST = (1, 0)
NORTH = (0, 1)
WEST = (-1, 0)
SOUTH = (0, -1)
RIGHT = {EAST: SOUTH, NORTH: EAST, WEST: NORTH, SOUTH: WEST}
LEFT = {EAST: NORTH, NORTH: WEST, WEST: SOUTH, SOUTH: EAST}

class Robot:
    def __init__(self, direction=NORTH, x_pos=0, y_pos=0):
        self.direction = direction
        self.coordinates = (x_pos, y_pos)

    def move(self, direction):
        for char in direction:
            if char == "R":
                self.direction = RIGHT[self.direction]
            elif char == "L":
                self.direction = LEFT[self.direction]
            else:
                self.coordinates = (self.coordinates[0] + self.direction[0], self.coordinates[1] + self.direction[1])