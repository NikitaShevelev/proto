import React from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import "./LeftMenuButton.scss"
import { appSlice } from './../../../../../store/reducers/AppSlice';
import { useDispatch } from 'react-redux/es/exports';


export const LeftMenuButton = () => {
  let leftMenuIsVisible = useAppSelector(state => state.appReducer.leftMenuVisible)
  const {showLeftMenu, closeLeftMenu} = appSlice.actions
  const dispatch = useDispatch()

  const onClickHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
    if(leftMenuIsVisible) {
      dispatch(closeLeftMenu())
    } else {
      dispatch(showLeftMenu())
    }
  }

  return (
    <div
      className={"left-menu-buttom"}
      onClick={onClickHandler}
    >
      <span>{leftMenuIsVisible ? "X" : "☰"}</span>
    </div>
  );
};
