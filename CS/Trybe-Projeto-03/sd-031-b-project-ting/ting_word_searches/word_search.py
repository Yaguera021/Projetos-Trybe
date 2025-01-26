def exists_word(word, instance):
    data = []

    for index in range(len(instance)):
        info = instance.search(index)
        name = info["nome_do_arquivo"]
        occurrences = [
            {"linha": i + 1} for i, row in enumerate(info["linhas_do_arquivo"])
            if word.lower() in row.lower()
            ]

        if occurrences:
            data.append(
                {"palavra": word, "arquivo": name, "ocorrencias": occurrences})

    return data


def search_by_word(word, instance):
    pass
