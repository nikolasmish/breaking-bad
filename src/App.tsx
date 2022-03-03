import Header from "components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride | undefined = {
  fontFamily: "'Poppins', sans-serif",
  colorScheme: "dark",
};

function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </MantineProvider>
  );
}

export default App;
