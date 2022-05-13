export function countNucleotides(strand) {
  if (strand.match(/[^ACGT]/g)) {
    throw new Error("Invalid nucleotide in strand");
  }
  let Acount = strand.match(/A/g)?.length || 0;
  let Ccount = strand.match(/C/g)?.length || 0;
  let Gcount = strand.match(/G/g)?.length || 0;
  let Tcount = strand.match(/T/g)?.length || 0;
  return `${Acount} ${Ccount} ${Gcount} ${Tcount}`;
}
