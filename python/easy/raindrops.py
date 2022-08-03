def convert(number):
    string = ""
    if not number % 3:
        string += "Pling"
    if not number % 5:
        string += "Plang"
    if not number % 7:
        string += "Plong"
    if not string:
        string += str(number)
    return string
