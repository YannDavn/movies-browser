import { FC } from "react";

interface Props {
  resume?: string;
}

export const MovieResume: FC<Props> = ({ resume }: Props) => {
  return <span>{resume}</span>
}