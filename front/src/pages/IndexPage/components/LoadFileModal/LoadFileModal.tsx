
import React from 'react';
import { Modal } from '../../../../UI/Modal/Modal';
import "./LoadFileModal.scss"
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { appSlice } from '../../../../store/reducers/AppSlice';
import { useAppSelector } from '../../../../hooks/redux';


interface LoadFileModalProps {
  visible: boolean
  setVisible: (state: boolean) => void
};

export const LoadFileModa: React.FC<LoadFileModalProps> = ({
  visible,
  setVisible
}) => {
  const dispatch = useDispatch()
  const workTable = useAppSelector(state => state.appReducer.table)
  const {updateWorkTable} = appSlice.actions
  const refInputFile = React.useRef<HTMLInputElement>(null)

  const onChangeFile: React.ChangeEventHandler = (event: React.ChangeEvent) => {
    const target = (event.target as HTMLInputElement)
      if(target.files) {
        const file = target.files[0];
        const data = new FormData()
        data.append('file', file, file.name)

        axios.post(`${process.env.REACT_APP_BACKEND}uf/savefile`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then(r => {
          axios.get(`${process.env.REACT_APP_BACKEND}uf/file`, {
            params: {
              "file_name": file.name
            }
          }).then(r => {
            const cols = r.data[0].map((c: string | number, i: number) => `f${i+1}`);
            const cols_aliases = Object.fromEntries(r.data[0].map((c: any, i: number) => [`f${i+1}`, c]));
            const rows = [...r.data.slice(1)].map(r => Object.fromEntries(r.map((c: any, i: number) => [`f${i+1}`, c])))
            console.log(rows);

            dispatch(updateWorkTable({
              ...workTable,
              rows,
              cols,
              cols_aliases
            }))
            setVisible(false)
          })
        })
        console.error("Во время загрузки файла произошла ошибка.", data);

      }
    }


  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      modalTitle={"Загрузка файла ..."}
    >
      <div>
        <input
          ref={refInputFile}
          type="file"
          accept=".csv, .xlsx"
          onChange={onChangeFile}
        />

        <div
          className="file-area"
          onClick={e => (refInputFile.current as HTMLInputElement).click()}
        >
          Перетащите файл в эту область или нажмите на неё
        </div>
      </div>
    </Modal>
  );
};
