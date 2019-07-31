import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import minus from '../img/minus.svg';
import plus from '../img/plus.svg';

const InputSpan = styled.span`
   height: 4rem;
   width: 4rem;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
`;

const Input = ({ time, addTime, substractTime }) => (
   <form>
      <Button big onClick={substractTime}>
         <img src={minus} alt="minus" />
      </Button>
      <InputSpan>{time}</InputSpan>
      <Button big onClick={addTime}>
         <img src={plus} alt="plus" />
      </Button>
   </form>
);

export default Input;
