import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as queryString from "querystring";
import { useMemo } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { MovieDetail } from "../interfaces/movies.interface";
import { getMovieDetails } from "../utils/request";

interface Props extends RouteComponentProps<{ id: string }> {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem auto 0 auto;
  width: 70%;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const MovieInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 1rem;
  }
`;

const Resume = styled.span`
  font-size: 1.5rem;
  text-align: justify;
`;

const Img = styled.img`
  object-fit: cover;
  width: 300px;
  margin: 1rem;
  @media (max-width: 767px) {
    margin: 1rem auto;
  }
`;

export const MovieDetailPage: FC<Props> = (props) => {
  const [infos, setInfos] = useState<MovieDetail | null>();
  const movieId = useMemo(
    () => (queryString.parse(props.location.search)?.["?id"] as string) ?? "",
    [props.location.search]
  );
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieDetails(movieId)
      .then(setInfos)
      .catch(() => setInfos(null));
  }, [movieId]);
  return (
    <Container>
      <MovieInfosContainer>
        <h1>{infos?.title}</h1>
        <Resume>{infos?.overview}</Resume>
        <h2>{infos?.vote_average}/10</h2>
      </MovieInfosContainer>
      <Img
        src={`https://image.tmdb.org/t/p/w300${infos?.poster_path}`}
        alt={infos?.title}
      />
    </Container>
  );
};
