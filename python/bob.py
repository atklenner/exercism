def response(hey_bob):
    formatted = hey_bob.strip(" \n\r\t")
    if formatted == "":
        return "Fine. Be that way!"
    elif formatted[-1] == "?":
        if formatted.isupper():
            return "Calm down, I know what I'm doing!"
        return "Sure."
    elif formatted.isupper():
        return "Whoa, chill out!"
    else:
        return "Whatever."
