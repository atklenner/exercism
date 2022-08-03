def saddle_points(matrix):
    matrix_height = len(matrix)
    if matrix_height == 0:
        return []
    matrix_width = len(matrix[0])
    for row in matrix:
        if len(row) != matrix_width:
            raise ValueError("irregular matrix")
    points = []
    for i in range(matrix_height):
        for j in range(matrix_width):
            current_num = matrix[i][j]
            column = [matrix[num][j] for num in range(matrix_height)]
            if current_num == max(matrix[i]) and current_num == min(column):
                points.append({"row": i + 1, "column": j + 1})
    return points