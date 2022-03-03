import { Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container
      sx={{
        height: "5vh",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Text weight="bold" component={Link} to="/">
        Breaking Bad
      </Text>
    </Container>
  );
};

export default Header;
