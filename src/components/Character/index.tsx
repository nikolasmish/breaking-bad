import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  nickname: string;
  charId: number;
}

const Character = ({ name, image, nickname, charId }: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      sx={{
        maxWidth: 240,
        "&:hover": {
          img: {
            filter: "brightness(125%)",
          },
        },
      }}
      component={Link}
      to={`/character/${charId}`}
    >
      <Card.Section>
        <Image height={400} src={image} alt={name} />
      </Card.Section>

      <Text size="lg" weight={500}>
        {name}
      </Text>

      <Text>{nickname}</Text>
    </Card>
  );
};

export default Character;
