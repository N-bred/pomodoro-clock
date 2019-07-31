import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';

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
   background: #9352ae;
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
   font-size: 3rem;
   margin: 2rem 0;
`;

const TitleInputContainer = styled.h2`
   margin: 1rem 0;
`;

function App() {
   let [breakTime, setBreakTime] = useState(0);
   let [sessionTime, setSessionTime] = useState(0);

   const addTime = (e, func) => {
      e.preventDefault();
      func((breakTime += 1));
   };
   const substractTime = (e, func) => {
      e.preventDefault();
      func((breakTime -= 1));
   };

   return (
      <Main>
         <Container>
            <Title>Pomodoro Timer</Title>

            <InputsContainer>
               <InputContainer>
                  <TitleInputContainer>Breaktime</TitleInputContainer>

                  <Input
                     addTime={e => addTime(e, setBreakTime)}
                     substractTime={e => substractTime(e, setBreakTime)}
                     time={breakTime}
                  />
               </InputContainer>

               <InputContainer>
                  <TitleInputContainer>Session Time</TitleInputContainer>
                  <Input
                     addTime={e => addTime(e, setSessionTime)}
                     substractTime={e => substractTime(e, setSessionTime)}
                     time={sessionTime}
                  />
               </InputContainer>
            </InputsContainer>
         </Container>
      </Main>
   );
}

export default App;
