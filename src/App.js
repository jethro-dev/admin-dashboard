import { Sidebar, Topbar, InfoWidgets } from "./components";
import styled from "styled-components";
import {
  Home,
  UserList,
  User,
  NewUser,
  ProductList,
  Product,
  NewProduct,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
`;

const Content = styled.div`
  margin-left: 237px;
  width: 100%;

  @media (max-width: 1280px) {
    margin-left: 64px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const MainContent = styled.div`
  background-color: rgba(0, 62, 193, 0.03);
  margin-top: 68px;
  min-height: calc(100vh - 68px);
`;

function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Content>
          <Topbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </MainContent>
        </Content>
      </Container>
    </Router>
  );
}

export default App;
