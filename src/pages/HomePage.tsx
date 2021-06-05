import { Skeleton } from "@material-ui/lab";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { MovieCard } from "../components/MovieCard";
import { SearchInput } from "../components/SearchInput";
import { Movie, TMDBResult } from "../interfaces/movies.interface";
import { getPopular, searchMovie } from "../utils/request";

interface Props extends RouteComponentProps<{}> {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto 0 auto;
  width: 100%;
  justify-content: center;
  > * {
    width: auto;
    margin: 1rem auto;
  }
`;

const MoviesContainter = styled.div`
  @media (min-width: 992px) {
    max-width: 70%;
  }
  @media (max-width: 992px) {
    max-width: 90%;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: .5rem;
  }
`;

/**
 * Calls the TMDB API in order to fetch movies, according to a user-defined search query
 *
 * @param {string} [search]
 * @returns {Promise<Array<Movie>>}
 */
const fetchMovies = async (search?: string): Promise<Array<Movie>> => {
  await new Promise((r) => setTimeout(r, 1000));
  let result: TMDBResult = search
    ? await searchMovie(search)
    : await getPopular();
  return result.results;
};

export const HomePage: FC<Props> = (_props) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(true);
  const skeleton = useMemo(
    () =>
      [...Array(20)].map((_, i) => (
        <Skeleton variant="rect">
          <MovieCard />
        </Skeleton>
      )),
    []
  );
  // Handle reload
  useEffect(() => {
    // Only do stuff when the "reload" variable is set to true
    if (!reload) {
      return;
    }
    // First, fetch the movies
    fetchMovies(search)
      .then(setMovies)
      .catch((_err) => setMovies([]))
      // Whether it worked or not, reset the "reload" boolean to its default value
      .finally(() => setReload(false));
  }, [reload]);
  return (
    <Container>
      <SearchInput
        setSearch={setSearch}
        search={search}
        setReload={setReload}
      />
      <MoviesContainter>
        {/* If it is loading, display the skeleton */}
        {reload && skeleton}
        {/* If it is done loading, display the matching movies or a message if none was found */}
        {!reload && movies.length
          ? movies.map((m, i) => <MovieCard key={`movie_${i}`} movie={m} />)
          : "Aucun résultat"}
      </MoviesContainter>
    </Container>
  );
};
