import React from "react";
import styled from "styled-components";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Home, People } from "@mui/icons-material";

const Container = styled.div`
  position: fixed;
  width: 237px;
  height: 100%;

  border-right: solid 1px lightgray;

  @media (max-width: 1280px) {
    width: 64px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1280px) {
    padding: 0;
  }
`;

const Logo = styled.h2`
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
  color: #7570d4;
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;

  @media (max-width: 1280px) {
    margin: 25px 0;
  }
`;

const LogoText = styled.h2`
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
  color: #7570d4;
  font-size: 1.8rem;
  font-weight: 300;
  width: 100%;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Span = styled.span`
  color: ${({ color }) => color};
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;
const MenuItem = styled.div`
  margin: 13px 0;
  @media (max-width: 1280px) {
    margin: 10px 0;
  }
`;

const Button = styled(Link)`
  border: none;
  background-color: #fff;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  transition: 100ms all ease-in-out;
  color: #7570d4;
  text-decoration: none;

  &:hover {
    background-color: rgb(238, 240, 243);
  }
`;

const IconCircle = styled.div`
  background-color: rgb(238, 240, 243);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  margin: 0 10px;
`;

const ButtonText = styled.h2`
  margin-left: 5px;
  font-size: 0.95rem;
  font-weight: 600;
  color: black;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <AdminPanelSettingsTwoToneIcon fontSize="large" />
            <LogoText>
              &lt;<Span color="#207220">v</Span>-
              <Span color="#b90000">admin</Span>
              /&gt;
            </LogoText>
          </Logo>
        </Link>
        <Menu>
          <MenuItem>
            <Button to="/">
              <IconCircle>
                <DashboardIcon sx={{ fontSize: "large" }} />
              </IconCircle>
              <ButtonText>Dashboard</ButtonText>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button to="/users">
              <IconCircle>
                <People sx={{ fontSize: "large" }} />
              </IconCircle>
              <ButtonText>Users</ButtonText>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button to="/products">
              <IconCircle>
                <ShoppingCartOutlinedIcon sx={{ fontSize: "medium" }} />
              </IconCircle>
              <ButtonText>Products</ButtonText>
            </Button>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
