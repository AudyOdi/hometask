import styled from "styled-components";

/* =============================================================================
Component
--------------------------------------------------------------------------------
ScrollView is a wrapper that makes the components inside (or a screen) scrollable.

This is to match the ScrollView component in React Native.
============================================================================= */

const ScrollView = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  transform: translateZ(0px);
  -webkit-overflow-scrolling: touch,
  overflow-x: hidden;
  overflow-y: auto;
`;

/* =============================================================================
Export
============================================================================= */

export default ScrollView;
