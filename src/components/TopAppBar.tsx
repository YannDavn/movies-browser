import { FC } from "react";
import styled from "styled-components";

export interface Props {}

const Div = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.light.secondary};
`;

export const TopAppBar: FC<Props> = (props) => {
  return <Div>Test</Div>;
};
