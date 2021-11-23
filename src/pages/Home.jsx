import React from "react";
import {
  InfoWidgets,
  Chart,
  Widget,
  SmallWidget,
  LargeWidget,
} from "../components";
import styled from "styled-components";
import { userData } from "../dummydata";
import { VisibilityOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 25px 0;
`;

const HomeWidgets = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: rgb(238, 240, 243) 1px solid;
  padding: 8px 0;
`;

const Image = styled.img`
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
const Usertitle = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: #646464;
`;
const ButtonCircle = styled.button`
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: white;
  color: #646464;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:hover {
    background-color: rgb(238, 240, 243);
    color: #7570d4;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 10px 20px;
`;
const Tr = styled.tr``;
const Th = styled.th`
  text-align: left;
`;
const Td = styled.td``;
const TdUser = styled.td`
  display: flex;
  align-items: center;
`;
const StatusButton = styled.button`
  padding: 10px 10px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  background-color: ${({ status }) => {
    switch (status) {
      case "approved":
        return "#e5faf2";
      case "declinded":
        return "#fff0f1";
      case "pending":
        return "#ebf1fe";
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case "approved":
        return "#359449";
      case "declinded":
        return "#d47070";
      case "pending":
        return "#7570d4";
    }
  }};
`;

const StatusButtonComponent = ({ status }) => {
  return <StatusButton status={status}>{status}</StatusButton>;
};

const Home = () => {
  return (
    <Container>
      <InfoWidgets />
      <Chart
        data={userData}
        title="User Analytics"
        grid={true}
        dataKey="Active User"
      />
      <HomeWidgets>
        <Widget
          flex={1}
          title="New Members"
          component={
            <List>
              <ListItem>
                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
                <ButtonCircle>
                  <VisibilityOutlined />
                </ButtonCircle>
              </ListItem>
              <ListItem>
                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
                <ButtonCircle>
                  <VisibilityOutlined />
                </ButtonCircle>
              </ListItem>
              <ListItem>
                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
                <ButtonCircle>
                  <VisibilityOutlined />
                </ButtonCircle>
              </ListItem>
              <ListItem>
                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
                <ButtonCircle>
                  <VisibilityOutlined />
                </ButtonCircle>
              </ListItem>
              <ListItem>
                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
                <ButtonCircle>
                  <VisibilityOutlined />
                </ButtonCircle>
              </ListItem>
            </List>
          }
        />
        <Widget
          flex={2}
          title="Latest transaction"
          component={
            <Table>
              <Tr>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </Tr>
              <Tr>
                <TdUser>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                  <Username>Peter Parker</Username>
                </TdUser>
                <Td>2 Jun 2021</Td>
                <Td>$122.00</Td>
                <Td>
                  <StatusButtonComponent status="pending" />
                </Td>
              </Tr>
              <Tr>
                <TdUser>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                  <Username>Peter Parker</Username>
                </TdUser>
                <Td>2 Jun 2021</Td>
                <Td>$122.00</Td>
                <Td>
                  <StatusButtonComponent status="approved" />
                </Td>
              </Tr>
              <Tr>
                <TdUser>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                  <Username>Peter Parker</Username>
                </TdUser>
                <Td>2 Jun 2021</Td>
                <Td>$122.00</Td>
                <Td>
                  <StatusButtonComponent status="declinded" />
                </Td>
              </Tr>
              <Tr>
                <TdUser>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                  <Username>Peter Parker</Username>
                </TdUser>
                <Td>2 Jun 2021</Td>
                <Td>$122.00</Td>
                <Td>
                  <StatusButtonComponent status="approved" />
                </Td>
              </Tr>
            </Table>
          }
        />
      </HomeWidgets>
    </Container>
  );
};

export default Home;
