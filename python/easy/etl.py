def transform(legacy_data):
    new_data = {}
    for value, letter_list in legacy_data.items():
        for letter in letter_list:
            new_data[letter.lower()] = value
    return new_data
