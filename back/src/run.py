import uvicorn
from uvicorn.config import LOGGING_CONFIG


if __name__ == "__main__":

    LOGGING_CONFIG["formatters"]["access"]["fmt"] = '%(asctime)s %(levelprefix)s %(client_addr)s - "%(request_line)s" %(status_code)s'
    LOGGING_CONFIG["formatters"]["default"]["fmt"] = "%(asctime)s %(levelprefix)s %(message)s"

    date_fmt = "%Y-%m-%d %H:%M:%S"
    LOGGING_CONFIG["formatters"]["default"]["datefmt"] = date_fmt
    LOGGING_CONFIG["formatters"]["access"]["datefmt"] = date_fmt

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        log_level="debug",
        proxy_headers=True,
    )
