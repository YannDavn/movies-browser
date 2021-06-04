import { useState } from "react";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { TopAppBar } from "./components/TopAppBar";
import { Themes, themes } from "./utils/theme";

const App: FC = () => {
  const [pickedTheme, setTheme] = useState<Themes>(Themes.light);
  return (
    <ThemeProvider theme={themes[pickedTheme]}>
      <>
        <TopAppBar theme={pickedTheme} setTheme={setTheme} />
      </>
    </ThemeProvider>
  );
}

export default App