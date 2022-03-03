import React from "react";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import CharactersPage from "pages/Characters";

const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <CharactersPage /> }];
  const element = useRoutes([...commonRoutes, ...publicRoutes]);
  return <>{element}</>;
};

export default AppRoutes;
