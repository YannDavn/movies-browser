import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../components/SearchInput";
import { Movie, TMDBResult } from "../interfaces/movies.interface";
import { getPopular, searchMovie } from "../utils/request";

interface Props extends RouteComponentProps<{}> {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 100%;
  justify-content: center;
  > * {
    width: auto;
    margin: 0 auto;
  }
`;

const fetchMovies = async (search?: string): Promise<Array<Movie>> => {
  let result: TMDBResult = search
    ? await searchMovie(search)
    : await getPopular();
  return result.results;
};

export const HomePage: FC<Props> = (_props) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [search, setSearch] = useState<string>("");
  const [reload, setReload] = useState<boolean>(true);
  useEffect(() => {
    if (!reload) {
      return;
    }
    setReload(false);
    fetchMovies(search)
      .then(setMovies)
      .catch((_err) => setMovies([]));
  }, [reload]);
  return (
    <Container>
      <SearchInput
        setSearch={setSearch}
        search={search}
        setReload={setReload}
      />
      <span>CONTENT {movies.toString()}</span>
    </Container>
  );
};
