import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

export const HomePage: FC<Props> = (props) => {
  return <span>HOME</span>
};
