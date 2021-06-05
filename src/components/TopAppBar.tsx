import { FC, useState } from "react";
import styled from "styled-components";
import { Themes } from "../utils/theme";
import { ThemeSwitch } from "./ThemeSwitch";
import BackButtonIcon from "@material-ui/icons/ChevronLeft";
import history from "../utils/history";

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
  height: fit-content;
  background-color: ${(props) => props.theme.secondary};
  align-items: center;
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

const BackButton = styled.div`
  height: 3rem;
  width: 3rem;
  left: .5rem;
  position: absolute;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  > svg {
    height: 100%;
    width: 100%;
  }
`;

export const TopAppBar: FC<Props> = (props) => {
  const [route, setRoute] = useState(window.location.pathname);
  history.listen((location) => {
    setRoute(location.pathname);
  });
  return (
    <Container>
      {route !== "/" && (
        <BackButton>
          <BackButtonIcon onClick={() => history.goBack()} />
        </BackButton>
      )}
      <TitleParent>
        <Title>Movies</Title>
      </TitleParent>
      <SwitchParent>
        <ThemeSwitch theme={props.theme} setTheme={props.setTheme} />
      </SwitchParent>
    </Container>
  );
};
