# syntax=docker/dockerfile:1

FROM python:3.11-slim-buster

WORKDIR /workspace

COPY ./requirements.txt /workspace/requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src /workspace/src

WORKDIR /workspace/src

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7000"]
