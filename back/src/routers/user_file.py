from fastapi import APIRouter, UploadFile, Response
import controllers.user_file as cntrlr
from typing import Optional
from logger import create_logger
import config as cfg
import os
import pandas as pd
import config as cfg


log = create_logger()

router = APIRouter(
    prefix="/uf",
    tags=["uf"],
    responses={404: {"description": "Not found"}},
)

@router.get("/files", response_model=list[str])
def get_file_list():
    files = os.listdir(cfg.USERS_FILES_PATH)
    return files


@router.get("/file")
def get_file_info(file_name: str, offset: int = 0, limit: int | None = None):
    return cntrlr.get_file_rows(file_name, offset, limit)


@router.post("/savefile/")
async def save_file(file: UploadFile) -> None:
    content = await file.read()
    cntrlr.save_file_on_server(content, file.filename)
