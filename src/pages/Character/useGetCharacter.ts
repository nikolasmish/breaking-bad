import { useEffect, useState } from "react";
import { Character as CharacterType } from "types";

export const useGetCharacter = (id: string | undefined) => {
  const [character, setCharacter] = useState<CharacterType | undefined>();
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState<any>();
  let characterName = "";

  useEffect(() => {
    characterName = "";
    setLoading(true);
    setQuote(undefined);

    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setCharacter(data[0]);
        setLoading(false);
        characterName = data[0].name;
      })
      .then(() => {
        fetch(
          `https://www.breakingbadapi.com/api/quote?author=${characterName}`
        )
          .then((data) => data.json())
          .then((data) => {
            setQuote(data[0]);
          });
      });
  }, [id]);

  return { loading, quote, character };
};
