import React, {useState} from 'react';

import "./IndexPage.scss"
import { LoadFileModa } from './components/LoadFileModal/LoadFileModal';
import { LoadTableModal } from './components/LoadTableModal/LoadTableModal';
import { DBTable } from './components/DBTable/DBTable';

export const IndexPage = () => {
  const [loadFileModaVisible, setLoadFileModaVisible] = useState<boolean>(false)
  const [loadTableModal, setLoadTableModal] = useState<boolean>(false)

  return (
    <div className={"index-page"}>
      <div className="tools">
        <div
          className="tool"
          onClick={e => setLoadFileModaVisible(true)}
        >Загрузить файл</div>
        <div
          className="tool"
          onClick={e => setLoadTableModal(true)}
        >Загрузить таблицу</div>
      </div>

      <div className="work-area">
        <DBTable />
      </div>

      <LoadFileModa visible={loadFileModaVisible} setVisible={setLoadFileModaVisible}/>
      <LoadTableModal visible={loadTableModal} setVisible={setLoadTableModal}/>
    </div>
  );
};
