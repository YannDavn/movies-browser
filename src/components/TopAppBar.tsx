import { FC } from "react";
import styled from "styled-components";
import { Themes } from "../utils/theme";
import { ThemeSwitch } from "./ThemeSwitch";

export interface Props {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

const Container = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
`;

const TitleParent = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.span`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 1rem auto;
`;

const SwitchParent = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const TopAppBar: FC<Props> = (props) => {
  return (
    <Container>
      <TitleParent>
        <Title>Movies</Title>
      </TitleParent>
      <SwitchParent>
        <ThemeSwitch theme={props.theme} setTheme={props.setTheme} />
      </SwitchParent>
    </Container>
  );
};
