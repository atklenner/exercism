def recite(start_verse, end_verse):
    verses = []
    days = ("first", "second", "third", 
            "fourth", "fifth", "sixth", 
            "seventh", "eighth", "ninth", 
            "tenth", "eleventh", "twelfth")
    gifts = ("and a Partridge in a Pear Tree.", "two Turtle Doves, ", "three French Hens, ", 
             "four Calling Birds, ", "five Gold Rings, ", "six Geese-a-Laying, ", 
             "seven Swans-a-Swimming, ", "eight Maids-a-Milking, ", "nine Ladies Dancing, ",
             "ten Lords-a-Leaping, ", "eleven Pipers Piping, ", "twelve Drummers Drumming, ")
    first_line = "On the {} day of Christmas my true love gave to me: "
    for i in range(start_verse, end_verse + 1):
        verse = ""
        if i == 1:
            verse += first_line.format(days[i - 1]) + "a Partridge in a Pear Tree."
        else:
            verse += first_line.format(days[i - 1])
            for j in range(i - 1, -1, -1):
                verse += gifts[j]
        verses.append(verse)
    return verses
