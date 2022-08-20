import re

def count_words(sentence):
    split_sentence = re.sub("([^\w']|_)+", " ", sentence.strip("'")).lower().strip().split(" ")
    count = {}
    for word in split_sentence:
        clean_word = word.strip("'")
        if clean_word not in count:
            count[clean_word] = 1
        else:
            count[clean_word] += 1
    return count
