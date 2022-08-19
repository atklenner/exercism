def decode(string):
    if not string: return ""

    decoded_string = ""
    count = ""
    for char in string:
        if char.isdigit():
            count += char
        else:
            if count == "":
                decoded_string += char
            else:
                decoded_string += char * int(count)
            count = ""
    return decoded_string

def encode(string):
    if not string: return ""
        
    encoded_string = ""
    count = 0
    current_char = string[0]

    for char in string:
        if char == current_char:
            count += 1
        else:
            if count > 1:
                encoded_string += str(count) + current_char
            else:
                encoded_string += current_char
            current_char = char
            count = 1
    else:
        if count > 1:
            encoded_string += str(count) + current_char
        else:
            encoded_string += current_char

    return encoded_string