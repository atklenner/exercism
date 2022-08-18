ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def rows(letter):
    diamond = []
    index = ALPHABET.index(letter)
    half_width = index + 1
    for i in range(half_width):
        line = ""
        for j in range(half_width):
            if (j + i) == index:
                line += ALPHABET[i]
            else:
                line += " "
        for j in range(index - 1, -1, -1):
            line += line[j]
        diamond.append(line)
    for i in range(index - 1, -1, -1):
        diamond.append(diamond[i])
    return diamond