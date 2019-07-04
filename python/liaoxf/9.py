# def is_palindrome(n):
#     s = str(n)
#     length = len(s)
#     for j in range(length):
#         if s[j] != s[length-1-j]:
#             return False
#     return True


def is_palindrome(n):
    if str(n) == str(n)[::-1]:
        return True


output = filter(is_palindrome, range(1000))
print(list(output))
print(list(output))
