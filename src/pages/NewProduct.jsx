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

const ItemContainer = styled.div``;

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

const NewProduct = () => {
  return (
    <Container>
      <Widget
        title="New Product"
        component={
          <>
            <Form>
              <ItemContainer>
                <Item>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Nike Sportswear Club Fleece"
                  />
                </Item>
                <Item>
                  <Label>Stock</Label>
                  <Input type="text" placeholder="123" />
                </Item>
                <Item>
                  <Label>Active</Label>
                  <Select>
                    <Option value="" disabled selected></Option>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Item>
                <Item>
                  <Label>Image</Label>
                  <Input type="file" />
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

export default NewProduct;
