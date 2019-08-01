import styled, { css } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.main`
  background: #5f34af;
  height: 100vh;
  width: 100%;
  color: #fff;
`;

const InputsContainer = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin: 3rem 0;
  font-weight: 400;
`;

const TitleInputContainer = styled.h2`
  margin: 1rem 0;
  font-weight: 400;
`;

const ValidateDiv = styled.div`
  width: 70%;
  height: 10rem;
  background: #4568de;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 2.6rem;
  margin: 1.5rem 0;
  border-radius: 3px;
  opacity: 0;
  transition-property: opacity, transform, margin;
  transition: 0.3s ease-out;
  pointer-events: none;
  transform: scale(0);
  margin-bottom: -10rem;
  ${props =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
      margin-bottom: 0;
    `};
`;

export {
  Container,
  Main,
  InputsContainer,
  InputContainer,
  Title,
  TitleInputContainer,
  ValidateDiv
};
