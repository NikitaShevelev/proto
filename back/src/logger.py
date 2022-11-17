import logging


def create_logger() -> logging.Logger:
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger("Fast api")
    return logger
