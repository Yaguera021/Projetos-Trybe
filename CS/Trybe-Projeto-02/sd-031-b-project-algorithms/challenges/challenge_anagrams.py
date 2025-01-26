def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    return merge(left_half, right_half)


def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result


def sort_string(s):
    return ''.join(merge_sort(list(s)))


def is_anagram(first_string, second_string):
    if not first_string or not second_string:
        return sort_string(first_string), sort_string(second_string), False
    sorted_first = sort_string(first_string.lower())
    sorted_second = sort_string(second_string.lower())
    are_anagrams = sorted_first == sorted_second
    return sorted_first, sorted_second, are_anagrams
