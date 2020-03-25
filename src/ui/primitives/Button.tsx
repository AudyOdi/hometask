import React from "react";
import styled, { css } from "styled-components";

import { ThemeObject } from "../../design/theme";

/* =============================================================================
Types and Config
============================================================================= */

interface IProps {
  text: string;
  onClick: () => void;
}

const Button = (props: IProps): JSX.Element => {
  const { text, onClick } = props;

  return (
    <ButtonBase
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      {text}
    </ButtonBase>
  );
};

/* =============================================================================
Styled Components and Helpers
============================================================================= */

const BUTTON_CSS = css`
  width: 100%;
  height: 46;
  align-items: center;
  justify-content: center;
  border-radius: 3;
`;

/**
 * Base button renders the main gradient background.
 */
const ButtonBase = styled.div<{ theme: ThemeObject }>`
  ${BUTTON_CSS};
  background: linear-gradient(
    90deg,
    ${props => props.theme.primaryButtonGradient.join(", ")}
  );
`;

/* =============================================================================
Export
============================================================================= */

export default Button;
