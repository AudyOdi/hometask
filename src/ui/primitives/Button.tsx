import React from "react";
import styled from "styled-components";

import { ThemeObject } from "../../design/theme";
import { spacing } from "../../design/spacing";

/* =============================================================================
Types and Config
============================================================================= */

interface IProps {
  text: string;
  onClick: () => void;
}

/* =============================================================================
Component
--------------------------------------------------------------------------------
Default button across the app. Currently there is only one: primary style.
============================================================================= */

const Button = (props: IProps): JSX.Element => {
  const { text, onClick } = props;

  return <ButtonBase onClick={onClick}>{text}</ButtonBase>;
};

/* =============================================================================
Styled Components
============================================================================= */

/**
 * Base button renders the main gradient background.
 */
const ButtonBase = styled.button<{ theme: ThemeObject }>`
  padding-left: ${spacing["4x"]}px;
  padding-right: ${spacing["4x"]}px;
  padding-top: ${spacing["1x"]}px;
  padding-bottom: ${spacing["1x"]}px;
  border-radius: ${spacing["2x"]}px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    ${props => props.theme.primaryButtonGradient.join(", ")}
  );
`;

/* =============================================================================
Export
============================================================================= */

export default Button;
