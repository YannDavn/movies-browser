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
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 3rem;
  color: white;
  flex-grow: 1;
  text-align: center;
`;

const SwitchParent = styled.div`
  flex-grow: 0;
  margin: auto 1rem auto 0;
`;

export const TopAppBar: FC<Props> = (props) => {
  return (
    <Div>
      <Title>Movies</Title>
      <SwitchParent>
        <ThemeSwitch theme={props.theme} setTheme={props.setTheme} />
      </SwitchParent>
    </Div>
  );
};
