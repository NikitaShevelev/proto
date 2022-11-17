from database import get_connection, get_cursor
import pydantic
from datetime import datetime as dt
from typing import Optional
from logger import create_logger

log = create_logger()

class TableInfo(pydantic.BaseModel):
    tbl_id: str
    cdt: dt
    udt: dt
    alias: str
    cols: list[str]
    cols_aliases: dict
    cols_types: dict
    rows: Optional[list[str | int | float]]


def get_table_list() -> list[str]:
    with get_connection() as con:
        with get_cursor(con, factory=TableInfo) as cur:
            return cur.execute("SELECT * FROM table_info").fetchall()


def get_table(
    table_name: str,
    with_rows: bool = False,
    offset: int = 0,
    limit: int = 0
):
    with get_connection() as con:
        out = {}
        with get_cursor(con) as cur:
            out = cur.execute("SELECT * FROM table_info WHERE tbl_id=%s OR alias=%s", [table_name, table_name]).fetchone()
            limit_sql = f"LIMIT {limit}" if limit > 0 else ""
            if with_rows:
                out["rows"] = cur.execute(f"SELECT * FROM users_tables.{table_name} {limit_sql} OFFSET {offset}").fetchall()

        return out


# def create_table(data):
#     pass


# def update_table(data):
#     pass


def delete_table(table_id: str):
    with get_connection() as con:
        with get_cursor(con) as cur:
            return cur.execute(f"""
                DROP TABLE users_tables.{table_id} CASCADE;
                DELETE FROM table_info WHERE tbl_id='{table_id}'
            """)
