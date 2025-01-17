import styled from "styled-components";

/* =============================================================================
Component
--------------------------------------------------------------------------------
View is a div component that has flex as default display.

This is to match with how React Native works and makes style development easier
because we only care about flex display for most of the case.
============================================================================= */

const View = styled.div`
  display: flex;
`;

/* =============================================================================
Export
============================================================================= */

export default View;
