import React from 'react'; // eslint-disable-line no-unused-vars
import styled, { keyframes } from 'styled-components';
import { colors } from 'settings';
import { Box } from 'grommet';
import Auth0Logo from './auth0-spinner-logo.svg';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  border: 2px solid;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border-color: ${colors.scorpion} ${colors.edward} ${colors.edward};
  animation: ${spin} 0.6s linear infinite;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const SpinnerWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`;

const Spinner = () => (
  <Box align="center" justify="center">
    <SpinnerWrapper align="center" justify="center">
      <Circle />
      <Auth0Logo />
    </SpinnerWrapper>
  </Box>
);

export default Spinner;
