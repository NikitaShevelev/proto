from fastapi import Response
import pandas as pd
import config as cfg


def get_file_rows(file_name: str, offset: int = 0, limit: int | None = None):
    try:
        try:
            df = pd.read_csv(cfg.USERS_FILES_PATH + file_name, header=0)
        except UnicodeDecodeError:
            df = pd.read_excel(cfg.USERS_FILES_PATH + file_name, header=0)

        df.fillna('', inplace=True)

        if offset < 0:
            offset = 0

        if limit is None or limit == 0:
            return [df.columns.to_list()] + df.values.tolist()[offset:]
        elif limit > 0:
            return [df.columns.to_list()] + df.values.tolist()[offset:limit]
    except FileNotFoundError:
        return Response("Указанный файл не сущестует", 404)


def save_file_on_server(content: bytes, filename: str) -> str:
    with open(cfg.USERS_FILES_PATH + filename, "wb") as f:
        f.write(content)
    return "load_user_file"
