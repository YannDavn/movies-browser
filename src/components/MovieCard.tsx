import { FC } from "react";
import styled from "styled-components";
import { Movie } from "../interfaces/movies.interface";

interface Props {
  movie?: Movie;
}

const Container = styled.div`
  height: 250px;
  width: 150px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: content;
  cursor: pointer;
`;

export const MovieCard: FC<Props> = ({ movie }: Props) => {
  if (movie?.poster_path) {
    return (
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </Container>
    );
  }
  console.log("AA");
  return <Container></Container>;
};
