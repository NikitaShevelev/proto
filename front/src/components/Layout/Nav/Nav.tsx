import React from 'react';
import "./Nav.scss"
import { LeftMenuButton } from './components/LeftMenuButton/LeftMenuButton';


export const Nav = () => {

  return (
    <div className={"nav"}>
      <div className="nav__lft-mn-btn nav__item">
        <LeftMenuButton />
      </div>

      <div className="nav__title nav__item">
        Site title
      </div>

      <div className="nav__logo nav__item">
        LOGO
      </div>

    </div>
  );
};
