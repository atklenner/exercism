def recite(start_verse, end_verse):
    starting_lines = ["This is the house that Jack built.",
                      "This is the malt ", "This is the rat ",
                      "This is the cat ", "This is the dog ",
                      "This is the cow with the crumpled horn ",
                      "This is the maiden all forlorn ",
                      "This is the man all tattered and torn ",
                      "This is the priest all shaven and shorn ",
                      "This is the rooster that crowed in the morn ",
                      "This is the farmer sowing his corn ",
                      "This is the horse and the hound and the horn "]
    following_lines = ["that belonged to the farmer sowing his corn ",
                        "that kept the rooster that crowed in the morn ",
                        "that woke the priest all shaven and shorn ",
                        "that married the man all tattered and torn ",
                        "that kissed the maiden all forlorn ",
                        "that milked the cow with the crumpled horn ",
                        "that tossed the dog ",
                        "that worried the cat ",
                        "that killed the rat ",
                        "that ate the malt ",
                        "that lay in the house that Jack built."]
    return_list = []
    for verse in range(start_verse - 1, end_verse):
        current_verse = starting_lines[verse]
        for i in range(len(following_lines) - verse, len(following_lines)):
            current_verse += following_lines[i]
        return_list.append(current_verse)
    return return_list
