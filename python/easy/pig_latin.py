import re

def translate(text):
    words = text.split(" ")
    translated = []
    for word in words:
        first_vowel_pos = re.search("[aeiouy]|xr|yt", word).span()
        qu_pos = re.search("qu", word)
        if first_vowel_pos[0] == 0:
            if word[0] == "y" and word[1] != "t":
                translated.append(word[1:] + word[0] + "ay")
            else:
                translated.append(word + "ay")
        elif qu_pos:
            translated.append(word[qu_pos.span()[1]:] + word[0:qu_pos.span()[1]] + "ay")
        else:
            translated.append(word[first_vowel_pos[0]:] + word[0:first_vowel_pos[0]] + "ay")
    return_string = " ".join(translated)
    return return_string