import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Modal } from '../../../../UI/Modal/Modal';
import { ITable } from './../../../../types/Table';
import { appSlice } from '../../../../store/reducers/AppSlice';
import { useDispatch } from 'react-redux/es/exports';
import "./LoadTableModal.scss"


interface LoadTableModalProps {
  visible: boolean
  setVisible: (state: boolean) => void
};

export const LoadTableModal: React.FC<LoadTableModalProps> = ({
  visible,
  setVisible
}) => {
  const {updateWorkTable} = appSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND}tbl`)
      .then(r => setTables(r.data))
      .catch(r => console.error(r))
  }, [])

  const [tables, setTables] = useState<ITable[]>([])

  const loadSelectedtable: React.MouseEventHandler = (e: React.MouseEvent) => {
    const tableId = (e.target as HTMLDivElement).getAttribute("data-table-id");
    axios.get(`${process.env.REACT_APP_BACKEND}/tbl`, {
      params: {
        table_name: tableId,
        with_rows: true
      }
    })
      .then(r => dispatch(updateWorkTable(r.data)))
      .catch(r => console.error(r))
      setVisible(false)
  }

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      modalTitle={"Загрузка таблицы ..."}
      className={"modal-load-table"}
    >
      {tables.length === 0 ? (
        <div className="message">Список таблиц пуст</div>
      ) : (
        <div className="table-list">
          {tables.map((t, indx) =>
            <div
              key={indx}
              className="table-list__item"
              onClick={loadSelectedtable}
              data-table-id={t.tbl_id}
            >
              {`${indx+1}) ${t.alias}`}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};
