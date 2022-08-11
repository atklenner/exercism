def find(search_list, value):
    low = 0
    high = len(search_list) - 1
    while low <= high:
        mid = (low + high) // 2
        guess = search_list[mid]
        if guess == value:
            return mid
        if guess < value:
            low = mid + 1
        else:
            high = mid - 1
    raise ValueError("value not in array")