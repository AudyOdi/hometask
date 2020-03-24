import React from "react";
import styled from "styled-components";

import { View } from "./ui/primitives";

const BigScreenApp = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "red" }}>
      <Header />
      <Body>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          <span>body</span>
        </View>
      </Body>
      <Footer>
        <View style={{ flex: 1, backgroundColor: "green" }}>
          <span>Footer</span>
        </View>
      </Footer>
    </View>
  );
};

const Header = styled(View)`
  width: 100%;
  height: 30px;
  background-color: blue;
`;
const Body = styled(View)`
  flex: 2.5;
`;
const Footer = styled(View)`
  flex: 1;
`;

export default BigScreenApp;
