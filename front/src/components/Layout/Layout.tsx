import React from 'react';
import { Nav } from './Nav/Nav';
import { Router } from '../../router/router';
import { LeftMenu } from './LeftMenu/LeftMenu';
import { useAppSelector } from '../../hooks/redux';
import "./Layout.scss"


export const Layout = () => {
  const leftMenuIsVisible = useAppSelector(state => state.appReducer.leftMenuVisible)

  return (
    <div className={"layout"}>
        <Nav />
        <LeftMenu />
        <div className="page">
          <Router />
        </div>
    </div>
  );
};
