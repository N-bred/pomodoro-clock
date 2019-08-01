import React from 'react';
import Button from './Button';
import { ClockContainer, TimeText, ClockStyled } from './styles/ClockStyles';

const Clock = ({ time, start, playState, rate }) => (
  <ClockContainer>
    <ClockStyled rate={rate}>
      <TimeText>{time}</TimeText>

      <Button
        onClick={start}
        clock
        disabled={playState}
        style={{ zIndex: '100' }}
      >
        Start
      </Button>
    </ClockStyled>
  </ClockContainer>
);

export default Clock;
