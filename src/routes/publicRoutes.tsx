import CharactersPage from "pages/Characters";
import CharacterPage from "pages/Character";

export const publicRoutes = [
  {
    path: "/characters",
    element: <CharactersPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
  },
];
