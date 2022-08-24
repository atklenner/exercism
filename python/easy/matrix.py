class Matrix:
    def __init__(self, matrix_string):
        self.matrix = self.process_matrix_string(matrix_string)

    def row(self, index):
        return self.matrix[index - 1]

    def column(self, index):
        return [row[index - 1] for row in self.matrix]

    def process_matrix_string(self, matrix_string):
        rows = matrix_string.split("\n")
        for i in range(len(rows)):
            rows[i] = [int(digit) for digit in rows[i].split(" ")]
        return rows