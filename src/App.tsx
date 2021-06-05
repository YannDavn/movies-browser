import { useState } from "react";
import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { TopAppBar } from "./components/TopAppBar";
import { Themes, themes } from "./utils/theme";
import { Route, Router, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import history from "./utils/history";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  min-height: 100vh;
  transition: color 300ms, background-color 300ms;
`;

const App: FC = () => {
  // TODO: Default value to user's system preference
  const [pickedTheme, setTheme] = useState<Themes>(Themes.light);
  return (
    <ThemeProvider theme={themes[pickedTheme]}>
      <Container>
        <TopAppBar theme={pickedTheme} setTheme={setTheme} />
        <Router history={history}>
          <Switch>
            <Route
              key="route_movie"
              exact
              path="/movie"
              component={MovieDetailPage}
            />
            <Route
              key="route_home"
              exact
              path="/"
              component={HomePage}
            />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
