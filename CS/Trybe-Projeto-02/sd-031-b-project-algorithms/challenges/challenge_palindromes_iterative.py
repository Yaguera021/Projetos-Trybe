def is_palindrome_iterative(word):
    if not word:
        return False
    start, end = 0, len(word) - 1
    while start < end:
        if word[start] != word[end]:
            return False
        start += 1
        end -= 1
    return True
    raise NotImplementedError
