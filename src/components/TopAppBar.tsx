import { FC } from "react";
import styled from "styled-components";
import { Themes } from "../utils/theme";
import { ThemeSwitch } from "./ThemeSwitch";

export interface Props {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

const Div = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
`;

export const TopAppBar: FC<Props> = (props) => {
  return (
    <Div>
      Test
      <ThemeSwitch theme={props.theme} setTheme={props.setTheme} />
    </Div>
  );
};
