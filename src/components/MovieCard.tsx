import { FC } from "react";
import styled from "styled-components";
import { Movie } from "../interfaces/movies.interface";
import { redirect } from "../utils/history";

interface Props {
  movie?: Movie;
}

const Container = styled.div`
  height: 250px;
  width: 150px;
  cursor: pointer;
  &:hover {
    > div {
      opacity: .8;
    }
  }
`;

const TitleOverlay = styled.div`
  height: 250px;
  width: 150px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  opacity: 0;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  transition: opacity 300ms;
`;

const Img = styled.img`
  width: 100%;
  object-fit: content;
`;

export const MovieCard: FC<Props> = ({ movie }: Props) => {
  if (movie?.poster_path) {
    return (
      <Container
        onClick={() => redirect(`/movie?id=${movie.id}`)}
      >
          <TitleOverlay>
            <span>{movie.title}</span>
          </TitleOverlay>
        <Img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </Container>
    );
  }
  return <Container></Container>;
};
