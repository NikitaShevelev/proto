import React, {useState, useRef} from 'react';
import { useAppSelector } from '../../../../hooks/redux';

import "./DBTable.scss"
import { TH } from './components/TH/TH';
import { appSlice } from '../../../../store/reducers/AppSlice';
import { useDispatch } from 'react-redux/es/exports';

export const DBTable = () => {
  const workTable = useAppSelector(s => s.appReducer.table)
  const {updateWorkTable} = appSlice.actions
  const [editTableNameMode, setEditTableNameMode] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const closeEditMode:React.KeyboardEventHandler = (e: React.KeyboardEvent) => {
    if(e.key === "Enter") {
      dispatch(updateWorkTable({...workTable, alias: ref.current!.value}))
      setEditTableNameMode(false)
    }
  }

  return (
    <div className={"db-table"}>
      <div className="db-table__title">
        {editTableNameMode ? (
          <>
            Таблица
            <input
              ref={ref}
              type="text"
              defaultValue={workTable.alias}
              onKeyDown={closeEditMode}
            />
          </>
        ) : (
          <>
            Таблица
            <span onDoubleClick={e => setEditTableNameMode(true)}>{workTable.alias}</span>
          </>
        )}
      </div>
      <div className="db-table__table">
        <table>
          <thead>
            <tr>
              {/* {Array.from(Array(50).keys()).map((c, indx) => */}
              {workTable.cols.map((c, indx) =>
                <td key={indx}><TH alias={`f${c}`}/></td>
              )}
            </tr>
          </thead>
          <tbody>
              {/* {Array.from(Array(200).keys()).map((row, indx2) => */}
                {workTable.rows.map((row, indx2) =>
                <tr key={indx2}>

                  {/* {Array.from(Array(50).keys()).map((c, indx3) => */}
                  {workTable.cols.map((c, indx3) =>
                    <td key={-indx3}>{row[c]}</td>
                    // <td key={-indx3}>{c}</td>
                  )}
                </tr>
              )}

          </tbody>
        </table>
      </div>
    </div>
  );
};
