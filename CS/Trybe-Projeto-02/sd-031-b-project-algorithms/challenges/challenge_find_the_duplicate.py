def find_duplicate(nums):
    if not (
        isinstance(nums, list)
        and len(nums) > 1
        and all(isinstance(num, int) and num >= 0 for num in nums)
    ):
        return False
    num_set = set()
    for num in nums:
        if num in num_set:
            return num
        num_set.add(num)
    return False
