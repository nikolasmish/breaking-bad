import {
  Container,
  LoadingOverlay,
  Transition,
  Text,
  Box,
  Image,
  Group,
  Badge,
  Title,
  Blockquote,
  Button,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCharacter } from "./useGetCharacter";

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { character, loading, quote } = useGetCharacter(id);

  const nextId = id === "57" ? "112" : Number(id) + 1;
  const prevId = id === "112" ? "57" : Number(id) - 1;

  return (
    <Container size="lg">
      <LoadingOverlay visible={loading} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        {Number(id) >= 2 ? (
          <Button
            variant="subtle"
            onClick={() => navigate(`/character/${prevId}`)}
          >
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        {Number(id) <= 115 && (
          <Button
            variant="subtle"
            onClick={() => navigate(`/character/${nextId}`)}
          >
            Next
          </Button>
        )}
      </Box>
      <Transition
        mounted={!loading}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              justifyContent: "center",
              ...styles,
            }}
          >
            <Image src={character?.img} height={400} />
            <Box
              sx={{
                padding: "0px 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <Title order={2}>
                {character?.name}{" "}
                <Text size="md" weight={400} component="span">
                  ({character?.nickname})
                </Text>
              </Title>

              {quote && (
                <Blockquote cite={"– " + quote?.author}>
                  {quote?.quote}
                </Blockquote>
              )}

              <Text size="md">Birthday: {character?.birthday}</Text>
              <Text size="md">Occupation:</Text>
              <Group>
                {character?.occupation.map((item) => (
                  <Badge key={item} color="green">
                    {item}
                  </Badge>
                ))}
              </Group>
              <Text size="md">Status: {character?.status}</Text>
              <Text size="md">Portrayed: {character?.portrayed}</Text>
            </Box>
          </div>
        )}
      </Transition>
    </Container>
  );
};

export default CharacterPage;
