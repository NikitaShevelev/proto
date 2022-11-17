export interface ITable {
  alias: string
  tbl_id: string
  cdt: string
  udt: string
  cols_aliases: any
  cols_types: any
  cols: string[]
}

export interface ITableWithRows extends ITable {
  rows: any[]
}

// interface IColumnType {
//   name: string,
//   alias: string
// }

// interface IColumnTypes {
//   TEXT: IColumnType,
//   INT: IColumnType,
//   REAL: IColumnType,
//   BOOL: IColumnType,
//   DATE: IColumnType,
//   DATETIME: IColumnType,
// }

// export const ColumnTypes: IColumnTypes = {
//   TEXT: {name: "TEXT", alias: "TEXT"},
//   INT: {name: "INT", alias: "INT"},
//   REAL: {name: "REAL", alias: "REAL"},
//   BOOL: {name: "BOOL", alias: "BOOL"},
//   DATE: {name: "DATE", alias: "DATE"},
//   DATETIME: {name: "DATETIME", alias: "DATETIME"}
// }

export enum ThTypes {
  TEXT = "TEXT",
  INT = "INTEGER",
  REAL = "REAL",
  BOOL = "BOOLEAN",
  DATE = "DATE",
  DATETIME = "DATETIME"
}
