import React from "react";
import styled from "styled-components";
import {
  Language,
  NotificationsNone,
  Settings,
  Menu,
} from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0;
  right: 0;
  height: 68px;
  width: calc(100% - 237px);
  z-index: 99;

  @media (max-width: 1280px) {
    width: calc(100% - 64px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconCircle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transition: all ease-in-out 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgb(238, 240, 243);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const IconCircleMenu = styled.div`
  display: none;
  place-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transition: all ease-in-out 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgb(238, 240, 243);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: grid;
    &:not(:last-child) {
      margin-right: 0px;
    }
  }
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <IconCircleMenu>
            <Menu sx={{ fontSize: "1.8rem" }} />
          </IconCircleMenu>
          <Text>Dashboard</Text>
        </Left>
        <Right>
          <IconCircle>
            <Badge badgeContent={4} color="primary">
              <NotificationsNone fontSize="medium" />
            </Badge>
          </IconCircle>
          <IconCircle>
            <Language fontSize="medium" />
          </IconCircle>
          <IconCircle>
            <Settings fontSize="medium" />
          </IconCircle>
          <IconCircle>
            <Avatar sx={{ width: 35, height: 35 }} />
          </IconCircle>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
