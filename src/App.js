import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const Container = styled.div`
   height: 100%;
   width: 100%;
   max-width: 120rem;
   margin: 0 auto;
`;

const Main = styled.main`
   background: #9352ae;
   height: 100vh;
   width: 100%;
   color: #fff;
`;

function App() {
   const handleClick = () => alert('Clicked');

   return (
      <Main>
         <Container>
            <Button onClick={handleClick}>Pause</Button>
         </Container>
      </Main>
   );
}

export default App;
