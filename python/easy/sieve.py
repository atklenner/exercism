def primes(limit):
    composite = set()
    all_numbers = set(range(2, limit + 1))
    for i in all_numbers:
        for j in range(2, limit + 1):
            composite.add(i * j)
    primes = sorted(list(all_numbers - composite))
    return primes