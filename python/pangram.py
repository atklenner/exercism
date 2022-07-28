def is_pangram(sentence):
    letters = set()
    for i in sentence:
        if i.isalpha():
            letters.add(i.lower())
    return len(letters) == 26