import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Chart, Widget } from "../components";
import { productData } from "../dummydata";

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

const ProductTop = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 20px;
  margin-bottom: 15px;
`;
const ProductMid = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 20px;
  margin-bottom: 15px;
`;

const Form = styled.form``;
const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const FormLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > label {
    margin: 10px 0;
  }

  & > input {
    padding: 5px;
    outline: none;
    border: 1px solid lightgray;
    width: 200px;
    font-size: 1rem;

    &::placeholder {
      font-family: "Roboto", sans-serif;
    }
  }
`;
const Label = styled.label``;
const Input = styled.input``;
const Select = styled.select`
  width: 150px;
  padding: 5px;
  font-size: 1rem;
`;
const Option = styled.option``;

const FormRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadImage = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 7px;
  margin-left: 20px;
  @media (max-width: 980px) {
    height: 150px;
    width: 150px;
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
  width: 150px;
  margin: 30px 0;

  &:hover {
    background-color: transparent;
    color: #74aac9;
    outline: 1px solid #77aac9;
  }
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div``;

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Product</Title>
        <Link to="/newProduct">
          <CreateButton>Create</CreateButton>
        </Link>
      </Wrapper>
      <ProductTop>
        <ProductInfoTop>
          <ProductImage src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/omufkuhutuyxg9ebscnd/sportswear-club-fleece-crew-wLrdjf.png" />
          <ProductName>Nike Sportswear Club Fleece</ProductName>
        </ProductInfoTop>
        <ProductInfoBottom>
          <ProductInfoItem>
            <ProductInfoKey>id:</ProductInfoKey>
            <ProductInfoValue>123</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>sales:</ProductInfoKey>
            <ProductInfoValue>5173</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>active:</ProductInfoKey>
            <ProductInfoValue>123</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>in stock:</ProductInfoKey>
            <ProductInfoValue>no</ProductInfoValue>
          </ProductInfoItem>
        </ProductInfoBottom>
      </ProductTop>

      <ProductMid>
        <Form>
          <FormTitle>Edit Product</FormTitle>
          <FormContent>
            <FormLeft>
              <Label>Product Name</Label>
              <Input type="text" placeholder="Apple Airpod" />
              <Label>In Stock</Label>
              <Select name="inStock" id="inStock">
                <Option selected disabled value="">
                  Select
                </Option>
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
              <Label>Active</Label>
              <Select name="active" id="active">
                <Option selected disabled value="">
                  Active
                </Option>
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
              <UpdateButton>Update</UpdateButton>
            </FormLeft>
            <FormRight>
              <UploadImage src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/omufkuhutuyxg9ebscnd/sportswear-club-fleece-crew-wLrdjf.png" />
              <EditLabel for="file">Edit</EditLabel>
              <Input type="file" id="file" style={{ display: "none" }} />
            </FormRight>
          </FormContent>
        </Form>
      </ProductMid>

      <ProductBottom>
        <Chart data={productData} title="Product Analytics" dataKey="Sales" />
      </ProductBottom>
    </Container>
  );
};

export default Product;
