def to_rna(dna_strand):
    return_string = ""
    for letter in dna_strand:
        if letter == "G":
            return_string += "C"
        elif letter == "C":
            return_string += "G"
        elif letter == "T":
            return_string += "A"
        elif letter == "A":
            return_string += "U"
    return return_string
