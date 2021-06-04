import { FC } from "react";
import styled from "styled-components";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchInput: FC<Props> = (props) => {
  return (
    <Container>
      <input
        type="string"
        name="search"
        placeholder="Rechercher un film..."
        value={props.search}
        onChange={(evt) => props.setSearch(evt.target.value)}
      />
      <button onClick={() => props.setReload(true)}>Rechercher</button>
    </Container>
  );
};
