import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #eee;
  border-bottom: 1px solid #ccc;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
`;

const Layout = ({ children }: { children: ReactNode }) => (
  <Wrapper>
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Navbar>
    <Main>{children}</Main>
  </Wrapper>
);

export default Layout;
