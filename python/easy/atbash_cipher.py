cipher = "abcdefghijklmnopqrstuvwxyz"
rehpic = "zyxwvutsrqponmlkjihgfedcba"

def encode(plain_text):
    encoded = ""
    for char in plain_text.lower():
        if char in cipher:
            encoded += rehpic[cipher.index(char)]
        elif char not in ",. ":
            encoded += char
    return " ".join([encoded[i: i+5] for i in range(0, len(encoded), 5)])

def decode(ciphered_text):
    decoded = ""
    for char in ciphered_text:
        if char in cipher:
            decoded += cipher[rehpic.index(char)]
        elif char != " ":
            decoded += char
    return decoded
