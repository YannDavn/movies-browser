import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as queryString from "querystring";
import { useMemo } from "react";

interface Props extends RouteComponentProps<{id: string}> {}

export const MovieDetailPage: FC<Props> = (props) => {
  const movieId = useMemo(() => queryString.parse(props.location.search)?.["?id"] ?? "", [props.location.search])
  return <span>MOVIE {movieId} DETAIL</span>;
};
