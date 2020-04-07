import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

import { getStoreItemArray } from '../reducers'

const Cart = () => {
  // const state = useSelector(state => state);
  // console.log(state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  //id, title, price, quantity

  // storeItems.reduce((sum, item) => {sum + item.quantiy * item.price }, 0)

  return(
    <StyledDiv>
      <TopDiv>
        <h1>Your Cart</h1>
        <p>{storeItems.length} Items</p>
        <Items>
        {storeItems.map(item => {
          return ( 
          <CartItem 
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
          />
          )
        })}
        </Items>
      </TopDiv>
      <Total>
        <div>Total: $<span>{(0/100).toFixed(2)}</span></div>
        <button type='submit'>Purchase</button>
      </Total>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #520052;
  color: whitesmoke;
  padding: 1rem 2rem;
  
`;
const TopDiv = styled.div`
  h1 {
    margin: 0 0 .5rem 1rem;
  }
  p {
    margin: 0 0 3rem 1rem;
  }
`;
const Items = styled.div`
  max-height:60vh;
  overflow-y: scroll;
`;


const Total = styled.div`
  bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  span {
    font-weight: bold;
    margin-left: .5rem;
  };
  button {
    padding: .5rem 2rem;
    margin: 0 1rem;
    color: whitesmoke;
    background: palevioletred;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;


export default Cart;