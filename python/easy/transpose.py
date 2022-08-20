def transpose(lines):
    fixed_lines = lines.split("\n")
    max_horizontal = max([len(line) for line in fixed_lines])
    transposed = ["" for i in range(max_horizontal)]

    for j in range(len(fixed_lines)):
        for i in range(len(fixed_lines[j])):
            if j > len(transposed[i]):
                transposed[i] += " " * (j - len(transposed[i]))
            transposed[i] += fixed_lines[j][i]
    return "\n".join(transposed)