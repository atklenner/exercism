def response(hey_bob):
    formatted = hey_bob.strip()
    if not formatted:
        return "Fine. Be that way!"
    elif formatted.endswith("?"):
        if formatted.isupper():
            return "Calm down, I know what I'm doing!"
        return "Sure."
    elif formatted.isupper():
        return "Whoa, chill out!"
    else:
        return "Whatever."
