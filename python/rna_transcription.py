def to_rna(dna_strand):
    return_string = ""
    dict = {"G":"C", "C":"G", "T":"A", "A":"U"}
    for letter in dna_strand:
        return_string += dict[letter]
    return return_string
