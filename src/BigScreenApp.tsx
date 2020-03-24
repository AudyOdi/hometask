import React from "react";
// import styled from "styled-components";

import Box, { Separators } from "./ui/components/Box";

const BigScreenApp = () => {
  return (
    <Box flex={1} backgroundColor="white" style={{ flexDirection: "column" }}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

const Header = () => {
  return (
    <Box flex={1} backgroundColor="blue" separators={[Separators.bottom]}>
      <span>A</span>
    </Box>
  );
};

const Body = () => {
  return (
    <Box flex={6} backgroundColor="red" separators={[Separators.bottom]}>
      <span>B</span>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box flex={2} backgroundColor="green">
      <span>F</span>
    </Box>
  );
};

export default BigScreenApp;
