import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button'
import CartItem from './CartItem';

import { getStoreItemArray } from '../reducers'
import { clearItems } from '../actions';

const Cart = () => {
  // const state = useSelector(state => state);
  // console.log(state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  //id, title, price, quantity
  const dispatch = useDispatch();

  const total = storeItems.reduce((sum, item) => {
    return (sum + (item.quantity * item.price) )
  }, 0);

  return(
    <StyledDiv>
      <TopDiv>
        <h1>Your Cart</h1>
        <p>
          {storeItems.length} Items
          <Button 
            style={{width:'fit-content'}}
            onClick={()=> dispatch(clearItems())}
          >
            Clear
          </Button>
        </p>
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
        <div>Total: $<span>{(total/100).toFixed(2)}</span></div>
        {/* <button type='submit'>Purchase</button> */}
        <Button style={{width:'fit-content'}}>Purchase</Button>
      </Total>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  position: sticky;
  top: 0;
  min-width: 20rem;
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
  button {
    display: inline-block;
    margin-left: 4rem;
    background: darkgray;
  }
`;
const Items = styled.div`
  max-height: 65vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right:1rem;
  
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  span {
    font-weight: bold;
    margin: 0 1rem 0 .5rem;
  };
  /* button {
    padding: .5rem 2rem;
    margin: 0 1rem;
    color: whitesmoke;
    background: #ff406e;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  } */
`;


export default Cart;