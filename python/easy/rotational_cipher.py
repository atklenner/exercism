def rotate(text, key):
    translation = ""
    for char in text:
        ascii = ord(char)
        if 65 <= ascii <= 90:
            translated_value = ((ascii + key - 65) % 26) + 65
        elif 97 <= ascii <= 122:
            translated_value = ((ascii + key - 97) % 26) + 97
        else:
            translated_value = ascii
        translation += chr(translated_value)
    return translation
