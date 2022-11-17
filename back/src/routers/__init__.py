from fastapi import FastAPI

from .user_file import router as uf_router
from .table import router as tbl_router

def init_routers(app: FastAPI) -> FastAPI:
    app.include_router(uf_router)
    app.include_router(tbl_router)
    return app
