import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const LargeWidget = () => {
  return <Container>large</Container>;
};

export default LargeWidget;
