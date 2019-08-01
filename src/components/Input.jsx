import React from 'react';
import { Img, InputSpan } from './styles/InputStyles';
import Button from './Button';
import minus from '../img/minus.svg';
import plus from '../img/plus.svg';

const Input = ({ time, addTime, substractTime, disableInputs }) => (
  <form>
    <Button big onClick={substractTime} disabled={disableInputs}>
      <Img src={minus} alt="Substract sign" />
    </Button>
    <InputSpan>{time}</InputSpan>
    <Button big onClick={addTime} disabled={disableInputs}>
      <Img src={plus} alt="Add Sign" />
    </Button>
  </form>
);

export default Input;
