import { useState } from "react";
import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { TopAppBar } from "./components/TopAppBar";
import { Themes, themes } from "./utils/theme";
import { Route, Router, Switch } from "react-router-dom";
import history from "./utils/history";
import { HomePage } from "./pages/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
              render={(props: any) => <MovieDetailPage {...props} />}
            />
            <Route
              key="route_home"
              exact
              path="/"
              render={(props) => <HomePage {...props} />}
            />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
