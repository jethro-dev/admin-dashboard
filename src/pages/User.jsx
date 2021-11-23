import {
  CalendarTodayOutlined,
  EmailOutlined,
  LocationOn,
  PermIdentity,
  Phone,
  Publish,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Widget } from "../components";

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 25px 0;
`;

const Wrapper = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
`;

const CreateButton = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1rem;

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: teal;
    outline: 1px solid teal;
  }
`;

const UserContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const UserTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const UserInfo = styled.div``;
const Username = styled.p`
  font-weight: 500;
`;
const Usertitle = styled.p`
  color: gray;
  font-weight: 300;
`;

const UserBottom = styled.div``;

const DetailsTitle = styled.h1`
  font-weight: 300;
  font-size: 1.1rem;
  color: gray;
  margin: 20px 0;
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const DetailsSpan = styled.span`
  margin-left: 10px;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  margin: 10px 0;
`;
const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px gray solid;
  padding: 5px 0;
  margin: 5px 0;
  font-size: 1rem;

  &::placeholder {
    font-family: "Roboto", sans-serif;
  }
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 7px;
  margin: 50px 50px 0px 50px;
  @media (max-width: 980px) {
    height: 130px;
    width: 130px;
  }
`;
const EditLabel = styled.label`
  color: gray;
  font-weight: 300;
  cursor: pointer;
  margin: 10px 0px 50px;

  &:hover {
    text-decoration: underline;
  }
`;

const UpdateButton = styled.button`
  background-color: #74aac9;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: #74aac9;
    outline: 1px solid #77aac9;
  }
`;

const User = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <CreateButton>Create</CreateButton>
        </Link>
      </Wrapper>
      <UserContainer>
        <Widget
          flex="1"
          component={
            <>
              <UserTop>
                <Avatar
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  sx={{ width: 50, height: 50, marginRight: "15px" }}
                />
                <UserInfo>
                  <Username>Peter Parker</Username>
                  <Usertitle>Software Developer</Usertitle>
                </UserInfo>
              </UserTop>
              <UserBottom>
                <DetailsTitle>Account Details</DetailsTitle>

                <DetailsRow>
                  <PermIdentity />
                  <DetailsSpan>peter_parker</DetailsSpan>
                </DetailsRow>
                <DetailsRow>
                  <CalendarTodayOutlined />
                  <DetailsSpan>06-09-1999</DetailsSpan>
                </DetailsRow>
                <DetailsTitle>Contact Details</DetailsTitle>
                <DetailsRow>
                  <Phone />
                  <DetailsSpan>+44 1234 5678 910</DetailsSpan>
                </DetailsRow>
                <DetailsRow>
                  <EmailOutlined />
                  <DetailsSpan>peterparker@gmail.com</DetailsSpan>
                </DetailsRow>
                <DetailsRow>
                  <LocationOn />
                  <DetailsSpan>Brighton | UK</DetailsSpan>
                </DetailsRow>
              </UserBottom>
            </>
          }
        />
        <Widget
          flex="2"
          title="Edit"
          component={
            <>
              <Form>
                <Left>
                  <UpdateItem>
                    <Label>Username</Label>
                    <Input type="text" placeholder="peter_parker" />
                  </UpdateItem>
                  <UpdateItem>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="Peter Parker" />
                  </UpdateItem>
                  <UpdateItem>
                    <Label>Email</Label>
                    <Input type="text" placeholder="peterparker@gmail.com" />
                  </UpdateItem>
                  <UpdateItem>
                    <Label>Phone</Label>
                    <Input type="text" placeholder="+44 1234 5678 910" />
                  </UpdateItem>
                  <UpdateItem>
                    <Label>Address</Label>
                    <Input type="text" placeholder="Brighton | UK" />
                  </UpdateItem>
                </Left>
                <Right>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                  <EditLabel htmlFor="file">Edit</EditLabel>
                  <Input type="file" id="file" style={{ display: "none" }} />
                  <UpdateButton>Update</UpdateButton>
                </Right>
              </Form>
            </>
          }
        />
      </UserContainer>
    </Container>
  );
};

export default User;
