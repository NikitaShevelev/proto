import React, {useState, useRef} from 'react';
import { ThTypes } from '../../../../../../types/Table';

import "./TH.scss"


interface THProps {
  alias?: string
  type?: ThTypes
};

export const TH: React.FC<THProps> = ({
  alias = "Новое поле",
  type = ThTypes.TEXT
}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)
  const [_alias, setAlias] = useState(alias)

  const closeEditMode:React.KeyboardEventHandler = (e: React.KeyboardEvent) => {
    if(e.key === "Enter") {
      setAlias(ref.current!.value)
      setEditMode(false)
    }
  }

  const sortButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    const target = (e.target as HTMLSpanElement);
    if(target.classList.contains("active")) {
      target.classList.remove("active")
    } else {
      (target.parentElement!.querySelector('.active') as HTMLSpanElement)?.classList.remove("active")
      target.classList.add("active")
    }
  }

  return (
    <div className={"th"}>
      <div className="th__type">{type.slice(0, 3)}</div>
      <div
        className="th__name"
        onDoubleClick={e => {setEditMode(true); ref.current!.focus()}}
      >
        {editMode ? (
          <input
            ref={ref}
            type="text"
            defaultValue={alias}
            onKeyDown={closeEditMode}
          />
          ) : (
          <span>{_alias}</span>
        )}
      </div>
      <div className="th__sort">
        <span className="up" onClick={sortButtonClick}>⏶</span>
        <span className="down" onClick={sortButtonClick}>⏷</span>
      </div>
    </div>
  );
};
