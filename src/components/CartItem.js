import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeItem, updateItem } from '../actions'

const CartItem = ({ id, title, quantity }) => {
  const dispatch = useDispatch();
//state for amount
  const [amount, setAmount] = React.useState(quantity);

  React.useEffect(()=>{
    console.log('beef', quantity);
    setAmount(quantity);
  }, [quantity])

  return(
    <StyledDiv >
      <Name>
        <span>{title}</span>
        <button
          onClick={()=> dispatch(removeItem(id))}
        >
          X
        </button>
      </Name>
      <Quantity>
        Quantity:
        <input 
          type='number' 
          min='1'
          max="99"//doesnt work
          maxLength="2"//doesnt work
          value={amount} 
          onChange={(ev)=> {
            dispatch(updateItem(id, ev.target.value));
          }}
        />
      </Quantity>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  margin: .25rem 0;
  border: 2px dashed grey;
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.2rem;
  button {
    font-size: 1.2rem;
    color: whitesmoke;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
const Quantity = styled.div`
  padding: .5rem 1rem 1rem;
  background: #300030;
  input {
    
    background: none;
    border: none;
    border-bottom: 2px solid white;
    font-size: 1.2rem;
    color:white;
    text-align: center;
    /* padding: 0 .5rem; */
  };
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  };

`;


export default CartItem;