import {
  Box,
  Container,
  LoadingOverlay,
  Title,
  Transition,
} from "@mantine/core";
import Character from "components/Character";
import { useGetCharacters } from "./useGetCharacter";

const CharactersPage = () => {
  const { loading, characters } = useGetCharacters();

  return (
    <Container size="lg">
      <LoadingOverlay visible={loading} />
      <Transition
        mounted={!loading}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "4rem 0",
              }}
            >
              <Title>All Characters</Title>
            </Box>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent: "center",
                ...styles,
              }}
            >
              {characters.map(({ img, name, nickname, char_id }) => (
                <Character
                  name={name}
                  nickname={nickname}
                  image={img}
                  charId={char_id}
                />
              ))}
            </div>
          </>
        )}
      </Transition>
    </Container>
  );
};

export default CharactersPage;
