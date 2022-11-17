import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITableWithRows } from './../../types/Table';

interface AppState {
  leftMenuVisible: boolean,
  table :ITableWithRows
}

const initialState: AppState = {
  leftMenuVisible: false,
  table: {
    alias: "Новая таблица",
    cdt: (new Date()).toString(),
    udt: (new Date()).toString(),
    cols_aliases: [],
    cols_types: [],
    tbl_id: "",
    cols: [],
    rows: []
  }
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLeftMenu: (state) => {
      state.leftMenuVisible = true;
    },
    closeLeftMenu: (state) => {
      state.leftMenuVisible = false;
    },
    updateWorkTable: (state, action: PayloadAction<ITableWithRows>) => {
      state.table = action.payload;
    },
  }
})
