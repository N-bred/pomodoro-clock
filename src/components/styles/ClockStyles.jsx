import styled, { css } from 'styled-components';

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClockStyled = styled.div`
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.3);
    z-index: 10;
    transition-property: transform, clip-path;
    transition: 0.3s linear;
    clip-path: polygon(50% 50%, 0 45%, 0 50%);

    ${props =>
      props.rate &&
      css`
        transform: scale(1.5) rotate(${(props.rate * 360) / 100}deg);
      `}
  }
`;

const TimeText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 3px;
`;

export { ClockContainer, ClockStyled, TimeText };
