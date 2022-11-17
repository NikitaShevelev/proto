import psycopg
from psycopg.rows import class_row, dict_row
from typing import Optional, Any


def get_connection() -> psycopg.Connection:
    # return psycopg.connect("postgres://root:1234@localhost:5555/proto", autocommit=False)
    return psycopg.connect("postgres://root:1234@db/proto", autocommit=False)


def get_cursor(con: psycopg.Connection, factory: Optional[Any] = None) -> psycopg.Cursor:
    return con.cursor(row_factory=(dict_row if factory is None else class_row(factory)))
