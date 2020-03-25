import styled, { css } from "styled-components";

import { View } from "../primitives";
import { spacing } from "../../design/spacing";

/* =============================================================================
Types and Config
============================================================================= */

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

/* =============================================================================
Component
--------------------------------------------------------------------------------
Box is a View component that will handle the separators spacing according
to the given props.

Because it is made of View component, the default display behaviour is flex.
============================================================================= */

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
    props.separators?.includes(Separators.top) ? spacing["3x"] : 0}px;
  margin-bottom: ${props =>
    props.separators?.includes(Separators.bottom) ? spacing["3x"] : 0}px;
  margin-left: ${props =>
    props.separators?.includes(Separators.left) ? spacing["3x"] : 0}px;
  margin-right: ${props =>
    props.separators?.includes(Separators.right) ? spacing["3x"] : 0}px;
`;

/* =============================================================================
Export
============================================================================= */

export default Box;
export { Separators };
