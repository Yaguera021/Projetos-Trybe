from src.pre_built.counter import count_ocurrences


def test_counter():
    assert count_ocurrences('data/jobs.csv', 'job') == 3454
    assert count_ocurrences('data/jobs.csv', 'data') == 23149
    assert count_ocurrences('data/jobs.csv', 'coala') == 0
