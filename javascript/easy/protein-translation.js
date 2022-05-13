const CODONS = {
  AUG: "Methionine",
  UUC: "Phenylalanine",
  UUU: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (RNA = "") => {
  const PROTEIN = [];
  for (let i = 0; i < RNA.length; i += 3) {
    if (CODONS[RNA.slice(i, i + 3)] === "STOP") {
      break;
    }
    if (!CODONS[RNA.slice(i, i + 3)]) {
      throw new Error("Invalid codon");
    }
    PROTEIN.push(CODONS[RNA.slice(i, i + 3)]);
  }
  return PROTEIN;
};
