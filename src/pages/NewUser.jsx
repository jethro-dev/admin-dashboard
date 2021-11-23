import React from "react";
import styled from "styled-components";
import { Widget } from "../components";

const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 25px 0;
`;

const Form = styled.form``;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 46%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin: 5px 0;
`;
const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
  outline: none;
  border: 1px solid lightgray;
  font-size: 0.95rem;

  &::placeholder {
    font-family: "Roboto", sans-serif;
  }
`;
const GenderContainer = styled.div`
  margin: 5px 0;
  & > input {
    margin-right: 5px;
    cursor: pointer;
  }

  & > label {
    margin-right: 10px;
    cursor: pointer;
  }
`;
const Select = styled.select`
  width: 100px;
  font-size: 0.8rem;
  padding: 3px;
  margin: 5px 0px;
  cursor: pointer;
`;
const Option = styled.option``;

const AddButton = styled.button`
  margin: 20px 0;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #7570d4;
  color: white;
  transition: all ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    outline: 1px solid #7570d4;
    color: #7570d4;
    background-color: transparent;
  }
`;

const NewUser = () => {
  return (
    <Container>
      <Widget
        title="New User"
        component={
          <>
            <Form>
              <ItemContainer>
                <Item>
                  <Label>Username</Label>
                  <Input type="text" placeholder="peter_parker" />
                </Item>
                <Item>
                  <Label>Full Name</Label>
                  <Input type="text" placeholder="Peter Parker" />
                </Item>
                <Item>
                  <Label>Email</Label>
                  <Input type="email" placeholder="peterparker@gmail.com" />
                </Item>
                <Item>
                  <Label>Password</Label>
                  <Input type="password" placeholder="password" />
                </Item>
                <Item>
                  <Label>Phone</Label>
                  <Input type="text" placeholder="+44 12345678910" />
                </Item>
                <Item>
                  <Label>Address</Label>
                  <Input type="text" placeholder="Brighton, UK" />
                </Item>
                <Item>
                  <Label>Gender</Label>
                  <GenderContainer>
                    <Input type="radio" name="gender" id="male" value="male" />
                    <Label for="male">Male</Label>
                    <Input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                    />
                    <Label for="female">Female</Label>
                    <Input
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                    />
                    <Label for="other">Other</Label>
                  </GenderContainer>
                </Item>
                <Item>
                  <Label>Active</Label>
                  <Select>
                    <Option value="" disabled selected></Option>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Item>
              </ItemContainer>
              <AddButton>Create</AddButton>
            </Form>
          </>
        }
      />
    </Container>
  );
};

export default NewUser;
