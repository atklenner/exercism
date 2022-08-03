def is_isogram(string):
    formatted = string.lower().replace(" ", "").replace("-", "")
    return len(set(formatted)) == len(formatted)
