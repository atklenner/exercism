def recite(start, take=1):
    verses = []
    for i in range(take):
        if start - i > 2:
            verses.append(f"{start - i} bottles of beer on the wall, {start - i} bottles of beer.")
            verses.append(f"Take one down and pass it around, {start - i - 1} bottles of beer on the wall.")
        elif start - i == 2:
            verses.append(f"{start - i} bottles of beer on the wall, {start - i} bottles of beer.")
            verses.append(f"Take one down and pass it around, {start - i - 1} bottle of beer on the wall.")
        elif start - i == 1:
            verses.append(f"{start - i} bottle of beer on the wall, {start - i} bottle of beer.")
            verses.append("Take it down and pass it around, no more bottles of beer on the wall.")
        else:
            verses.append("No more bottles of beer on the wall, no more bottles of beer.")
            verses.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
        if take > 1 and i < take - 1:
            verses.append("")

    return verses
