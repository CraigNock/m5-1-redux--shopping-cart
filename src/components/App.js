import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Logo from './Logo';
import ItemGrid from './ItemGrid';
import Cart from './Cart';


const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart/>
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header sidebar"
    "main main main sidebar"
    "main main main sidebar"
    "main main main sidebar";
  /* grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;




export default App;
