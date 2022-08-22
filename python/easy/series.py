def slices(series, length):
    if series == "":
        raise ValueError("series cannot be empty")
    elif length == 0:
        raise ValueError("slice length cannot be zero")
    elif length < 0:
        raise ValueError("slice length cannot be negative")
    elif length > len(series):
        raise ValueError("slice length cannot be greater than series length")
    return [series[i:i + length] for i in range(len(series) + 1 - length)]
