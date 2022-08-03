def append(list1, list2):
    return list1 + list2


def concat(lists):
    new_list = []
    for lst in lists:
        new_list += lst
    return new_list


def filter(function, list):
    filtered_list = []
    for item in list:
        if function(item):
            filtered_list.append(item)
    return filtered_list


def length(list):
    return len(list)


def map(function, list):
    mapped_list = []
    for item in list:
        mapped_list.append(function(item))
    return mapped_list


def foldl(function, list, initial):
    accumulator = initial
    for item in list:
        accumulator = function(accumulator, item)
    return accumulator


def foldr(function, list, initial):
    accumulator = initial
    for i in range(len(list)- 1, -1, -1):
        accumulator = function(list[i], accumulator)
    return accumulator


def reverse(list):
    reversed_list = []
    for i in range(len(list)- 1, -1, -1):
        reversed_list.append(list[i])
    return reversed_list
    