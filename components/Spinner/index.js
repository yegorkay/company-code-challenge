import React from 'react'; // eslint-disable-line no-unused-vars
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
// ! TODO continue this
const Spinner = styled.div`
  border: 2px solid;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-color: red #a5a8a8 #a5a8a8;
  animation: ${spin} 0.6s linear infinite;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Spinner;
