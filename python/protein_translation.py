codons = {"AUG": "Methionine", 
          "UUU": "Phenylalanine", 
          "UUC": "Phenylalanine", 
          "UUA": "Leucine", 
          "UUG": "Leucine", 
          "UCU": "Serine",
          "UCC": "Serine",
          "UCA": "Serine",
          "UCG": "Serine",
          "UAU": "Tyrosine",
          "UAC": "Tyrosine", 
          "UGU": "Cysteine", 
          "UGC": "Cysteine",
          "UGG": "Tryptophan"}

def proteins(strand):
    protein_translation = []
    split_strand = [strand[3 * i:3 * i + 3] for i in range(len(strand) // 3)]
    for current_codon in split_strand:
        if current_codon in codons.keys():
            protein_translation.append(codons[current_codon])
        else:
            break
    return protein_translation
