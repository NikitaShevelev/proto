import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { parts } from './utils';
import { Link } from 'react-router-dom';
import "./LeftMenu.scss"

export const LeftMenu = () => {
  const isVisible = useAppSelector(state => state.appReducer.leftMenuVisible)
  const onClickOnMenuItem: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent) => {
    const target = (event.target as HTMLDivElement);

    if (target.className.search("opened") === - 1) {
      target.classList.add("opened")
      target.parentElement!.querySelectorAll<HTMLDivElement>(".left-menu__part__subitem").forEach(item => (item as HTMLDivElement).style.display = "block")
    } else {
      target.classList.remove("opened")
      target.parentElement!.querySelectorAll<HTMLDivElement>(".left-menu__part__subitem").forEach(item => (item as HTMLDivElement).style.display = "none")
    }
  }

  if (isVisible) {
    return (
      <div className={"left-menu"}>
        <div className="left-menu__title">Menu title</div>
        <div className="left-menu__parts">
          {parts.map((part, indx) =>
            <div key={indx} className="left-menu__part">
              <div
                className={`left-menu__part__item ${part.subParts ? "" : "single"}`}
                onClick={onClickOnMenuItem}
              >
                <Link to={part.link}>{part.name}</Link>
              </div>

              {part?.subParts?.map((subpart, indx2) =>
                <div key={-indx2} className="left-menu__part__subitem">
                  <Link to={subpart.link}>{subpart.name}</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
};
