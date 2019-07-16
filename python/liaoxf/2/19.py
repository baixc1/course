import re


def is_valid_email(addr):
    re_email = re.compile(r'^[a-zA-Z]+[a-zA-Z\.]*@[a-zA-Z\.]+[a-zA-Z]+$')
    if re.match(re_email, addr):
        return True
    else:
        return False

def name_of_email(addr):
    re_name = re.compile(r'^(<(.*?)>)|((.*?)@).*')
    groups = re.match(re_name,addr).groups()
    return groups[1] or groups[3]

assert is_valid_email('someone@gmail.com')
assert is_valid_email('bill.gates@microsoft.com')
assert not is_valid_email('bob#example.com')
assert not is_valid_email('mr-bob@example.com')
print('ok')

assert name_of_email('<Tom Paris> tom@voyager.org') == 'Tom Paris'
assert name_of_email('tom@voyager.org') == 'tom'
print('ok')