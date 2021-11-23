import React from "react";
import styled from "styled-components";
import { InfoWidget } from "..";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

const InfoWidgets = () => {
  return (
    <Container>
      <InfoWidget />
      <InfoWidget />
      <InfoWidget />
    </Container>
  );
};

export default InfoWidgets;
