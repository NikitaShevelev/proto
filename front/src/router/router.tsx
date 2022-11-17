import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage/IndexPage';

interface IRouteItem {
  path: string
  element: React.ReactNode
}

const routes: IRouteItem[] = [
  { path: "/", element: <IndexPage /> }
]

export const Router: React.FC = () => {

  return (
    <Routes>
      {routes.map((route, index) =>
        <Route key={index} path={route.path} element={route.element} />
      )}
    </Routes>
  );
};
