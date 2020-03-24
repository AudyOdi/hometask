import styled, { css } from "styled-components";

import { View } from "../primitives";

enum Separators {
  left,
  right,
  top,
  bottom
}

interface IProps {
  flex?: number;
  height?: number;
  backgroundColor?: string;
  separators?: Array<Separators>;
}

const Box = styled(View)<IProps>`
  ${props =>
    props.flex
      ? css`
          flex: ${props.flex};
        `
      : ""};
  ${props =>
    props.height
      ? css`
          height: ${props.height}px;
        `
      : ""};
  ${props =>
    props.backgroundColor
      ? css`
          background-color: ${props.backgroundColor};
        `
      : ""};
  margin-top: ${props =>
    props.separators?.includes(Separators.top) ? 10 : 0}px;
  margin-bottom: ${props =>
    props.separators?.includes(Separators.bottom) ? 10 : 0}px;
  margin-left: ${props =>
    props.separators?.includes(Separators.left) ? 10 : 0}px;
  margin-right: ${props =>
    props.separators?.includes(Separators.right) ? 10 : 0}px;
`;

export default Box;
export { Separators };
