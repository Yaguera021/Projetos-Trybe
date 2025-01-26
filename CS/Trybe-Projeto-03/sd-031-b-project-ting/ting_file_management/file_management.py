import sys


def txt_importer(path_file):
    try:
        if not path_file.endswith('.txt'):
            raise ValueError('Formato inválido')
        with open(path_file, 'r') as file:
            lines = file.read().split('\n')
            return lines
    except FileNotFoundError:
        error_message = (f"Arquivo {path_file} não encontrado")
        print(error_message, file=sys.stderr)
        return None
    except ValueError as ve:
        error_message = str(ve)
        print(error_message, file=sys.stderr)
        return None
