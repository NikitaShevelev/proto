CREATE SCHEMA users_tables;

CREATE TABLE meta (
    tbl_cntr BIGSERIAL
);

CREATE TABLE table_info (
    tbl_id TEXT PRIMARY KEY,  -- схема.название таблицы (пример: users_tables.tbl1)
    cdt TIMESTAMP NOT NULL,
    udt TIMESTAMP NOT NULL,
    alias TEXT NOT NULL,
    cols JSONB,
    cols_aliases JSONB,
    cols_types JSONB
);


CREATE TABLE users_tables.tbl1 (
	f1 TEXT
);

INSERT INTO users_tables.tbl1 (f1) VALUES ('Тестовая строка 1'), ('Тестовая строка 2'), ('Тестовая строка 3');

INSERT INTO table_info(tbl_id, cdt, udt, alias, cols_aliases, cols_types, cols)
VALUES('tbl1', NOW(), NOW(), 'Тестовая таблица', '{"f1":"Поле"}', '{"f1":"TEXT"}', '["f1"]');

INSERT INTO meta(tbl_cntr) VALUES (0);
UPDATE meta SET tbl_cntr = tbl_cntr + 1;
