def find_anagrams(word, candidates):
    matches = []
    letters = count_letters(word.lower())
    for candidate in candidates:
        if count_letters(candidate.lower()) == letters and word.lower() != candidate.lower():
            matches.append(candidate)
    return matches

def count_letters(word):
    count = {}
    for letter in word:
        if letter not in count.keys():
            count[letter] = 1
        else:
            count[letter] += 1
    return count