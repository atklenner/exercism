def sum_of_multiples(limit, multiples):
    total = set()
    for num in multiples:
        if num != 0:
            total = total | set(range(0, limit, num))
    return sum(total)