import pytest
from challenges.challenge_encrypt_message import encrypt_message


def test_encrypt_message():
    assert encrypt_message("coala", 1) == "c_alao"
    assert encrypt_message("coala", 0) == "alaoc"
    assert encrypt_message("coala", -1) == "alaoc"

    with pytest.raises(TypeError, match="tipo inválido para key"):
        encrypt_message("coala", "0")
    with pytest.raises(TypeError, match="tipo inválido para message"):
        encrypt_message(21, 21)
