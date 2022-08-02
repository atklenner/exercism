def proteins(strand):
    protein = []
    for i in range(len(strand) // 3):
        codon = strand[3 * i:3 * i + 3]
        if codon in ["AUG"]:
            protein.append("Methionine")
        elif codon in ["UUU", "UUC"]:
            protein.append("Phenylalanine")
        elif codon in ["UUA", "UUG"]:
            protein.append("Leucine")
        elif codon in ["UCU", "UCC", "UCA", "UCG"]:
            protein.append("Serine")
        elif codon in ["UAU", "UAC"]:
            protein.append("Tyrosine")
        elif codon in ["UGU", "UGC"]:
            protein.append("Cysteine")
        elif codon in ["UGG"]:
            protein.append("Tryptophan")
        else:
            break
    return protein
