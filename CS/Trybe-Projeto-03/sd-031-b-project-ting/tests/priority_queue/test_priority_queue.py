from ting_file_management.priority_queue import PriorityQueue
import pytest


def test_basic_priority_queueing():
    priority_queue = PriorityQueue()
    file = {"nome_do_arquivo": "teste.txt", "qtd_linhas": 4}
    priority_queue.enqueue(file)
    assert len(priority_queue) == 1
    assert priority_queue.dequeue() == file and len(priority_queue) == 0

    files = [
        {"nome_do_arquivo": "teste1.txt", "qtd_linhas": 21},
        {"nome_do_arquivo": "teste2.txt", "qtd_linhas": 4},
        {"nome_do_arquivo": "teste3.txt", "qtd_linhas": 12},
        {"nome_do_arquivo": "teste4.txt", "qtd_linhas": 5}
    ]

    [priority_queue.enqueue(file) for file in files]

    assert priority_queue.search(0) == files[1]

    with pytest.raises(IndexError):
        priority_queue.search(5)
