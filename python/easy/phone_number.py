import re

class PhoneNumber:
    def __init__(self, number):
        self.number = self.process_number(number)
        self.area_code = self.number[0:3]

    def process_number(self, number):
        just_digits = self.sanitize_number(number)
        correct_length = self.check_length(just_digits)
        self.check_area_exchange(correct_length)
        return "".join(correct_length)

    def sanitize_number(self, number):
        if re.search("[a-zA-Z]", number):
            raise ValueError("letters not permitted")
        elif re.search("[@!:]", number):
            raise ValueError("punctuations not permitted")
        return re.findall("\d", number)

    def check_length(self, number):
        if len(number) < 10:
            raise ValueError("incorrect number of digits")
        elif len(number) == 11:
            if number[0] != "1":
                raise ValueError("11 digits must start with 1")
            else:
                return number[1:]
        elif len(number) > 11:
            raise ValueError("more than 11 digits")
        else:
            return number

    def check_area_exchange(self, ten_digit_number):
        if ten_digit_number[0] == "0":
            raise ValueError("area code cannot start with zero")
        elif ten_digit_number[0] == "1":
            raise ValueError("area code cannot start with one")
        elif ten_digit_number[3] == "0":
            raise ValueError("exchange code cannot start with zero")
        elif ten_digit_number[3] == "1":
            raise ValueError("exchange code cannot start with one")

    def pretty(self):
        return f"({self.area_code})-{self.number[3:6]}-{self.number[6:]}"