import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
   color: #eaeaea;
   border: 2px solid currentColor;
   background: transparent;
   border-radius: 3px;
   padding: 1rem 2rem;
   text-transform: capitalize;
   font-family: inherit;
   font-weight: 400;
   cursor: pointer;
   transition-property: background, box-shadow;
   transition: 0.3s ease-in-out;

   &:hover {
      background: rgba(0, 0, 0, 0.3);
   }

   &:focus {
      outline: none;
      box-shadow: 0 0.3rem 1rem rgba(255, 255, 255, 0.4);
      background: rgba(0, 0, 0, 0.3);
   }
`;
export default ButtonStyled;
