from ting_file_management.file_management import txt_importer
import sys


def process(path_file, instance):
    for file in instance._queue:
        if file["nome_do_arquivo"] == path_file:
            return file
    lines = txt_importer(path_file)
    dict_file = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(lines),
        "linhas_do_arquivo": lines,
    }
    instance.enqueue(dict_file)
    print(dict_file)


def remove(instance):
    try:
        removed_file = instance.dequeue()
        print(
            f"Arquivo {removed_file['nome_do_arquivo']} removido com sucesso"
            )
    except IndexError:
        print("Não há elementos", file=sys.stdout)


def file_metadata(instance, position):
    try:
        metadata = instance.search(position)
        print(metadata)
    except IndexError as e:
        print(f"Posição inválida: {e}", file=sys.stderr)
