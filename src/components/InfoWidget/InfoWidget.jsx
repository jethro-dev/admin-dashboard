import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  height: 100%;
  width: 100%;

  padding: 20px 20px;
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

const Title = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const Content = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 1.2rem;

  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;
const Subtitle = styled.span`
  font-size: 15px;
  color: gray;
`;

const InfoWidget = () => {
  return (
    <Container>
      <Title>Revenue</Title>
      <Content>
        <Money>$2,410</Money>
        <MoneyRate>
          -11.4
          <ArrowDownward
            fontSize="large"
            sx={{ color: true ? "red" : "green", marginLeft: "5px" }}
          />
        </MoneyRate>
      </Content>
      <Subtitle>Compared to last month</Subtitle>
    </Container>
  );
};

export default InfoWidget;
