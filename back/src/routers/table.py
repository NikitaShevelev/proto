from fastapi import APIRouter, UploadFile
import controllers.table as cntrlr
from typing import Optional, cast
from logger import create_logger

log = create_logger()

router = APIRouter(
    prefix="/tbl",
    tags=["tbl"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
def get_table_list(
    table_name: Optional[str] = None,
    with_rows: Optional[bool] = False,
    offset: Optional[int] = 0,
    limit: Optional[int] = 0
):
    if table_name is None:
        log.debug("cntrlr.get_table_list")
        return cntrlr.get_table_list()
    else:
        return cntrlr.get_table(table_name, cast(bool, with_rows), cast(int, offset), cast(int, limit))


# @router.post("/")
# def add_tbl(data):
#     return cntrlr.create_table(data)


# @router.put("/")
# def upt_tbl(data):
#     return cntrlr.update_table(data)


@router.put("/")
def del_tbl(table_id: str):
    return cntrlr.delete_table(table_id)
