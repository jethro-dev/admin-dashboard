import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 20px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 1280px) {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const Widget = ({ flex, title, component, width, height }) => {
  return (
    <Container flex={flex} width={width} height={height}>
      {title && <Title>{title}</Title>}
      {component}
    </Container>
  );
};

export default Widget;
