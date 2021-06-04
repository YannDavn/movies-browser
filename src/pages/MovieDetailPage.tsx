import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as queryString from "querystring";
import { useMemo } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import {  MovieDetail } from "../interfaces/movies.interface";
import { getMovieDetails } from "../utils/request";
import { MovieResume } from "../components/MovieResume";

interface Props extends RouteComponentProps<{ id: string }> {}

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
    getMovieDetails(movieId).then(setInfos).catch(() => setInfos(null))
  }, [movieId]);
  return (
    <Container>
      <MovieResume resume={infos?.overview}/>
      <span>MOVIE {movieId} DETAIL</span>;
    </Container>
  );
};
