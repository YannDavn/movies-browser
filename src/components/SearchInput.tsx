import { KeyboardEvent } from "react";
import { FC } from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";

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

const TextInputContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  height: 1rem;
  margin-right: 1rem;
`;

const TextInput = styled.input`
  flex-grow: 1;
  height: 100%;
`;

const ClearTextButton = styled.div`
  flex-grow: 0;
  height: 100%;
  cursor: pointer;
`;

export const SearchInput: FC<Props> = (props) => {
  const handleKeyPress = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      props.setReload(true);
    }
  };

  return (
    <Container>
      <TextInputContainer>
        <TextInput
          type="string"
          name="search"
          placeholder="Rechercher un film..."
          onKeyDown={handleKeyPress}
          value={props.search}
          onChange={(evt) => props.setSearch(evt.target.value)}
        />
        {props.search.length > 0 && (
          <ClearTextButton
            onClick={() => {
              props.setSearch("");
              props.setReload(true);
            }}
          >
            <ClearIcon />
          </ClearTextButton>
        )}
      </TextInputContainer>
      <button onClick={() => props.setReload(true)}>Rechercher</button>
    </Container>
  );
};
