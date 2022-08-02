def commands(binary_str):
    hand_shake = []
    command = ["jump", "close your eyes", "double blink", "wink"]
    for i in range(1, 5):
        if binary_str[i] == "1":
            hand_shake.append(command[i - 1])
    if binary_str[0] == "0":
        hand_shake.reverse()
    return hand_shake
