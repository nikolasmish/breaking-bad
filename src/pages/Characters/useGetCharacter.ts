import { useEffect, useState } from "react";
import { Character as CharacterType } from "types";

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<CharacterType[]>(() => []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((data) => data.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      });
  }, []);

  return { characters, loading };
};
