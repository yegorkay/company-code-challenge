import React from 'react'; // eslint-disable-line no-unused-vars
import styled, { keyframes } from 'styled-components';
import { colors, device } from 'settings';
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

  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  };
`;

const SpinnerWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${device.tablet} {
      width: 25px;
      height: 25px;
    };
  }
`;

const SpinnerContainer = styled(Box)`
  min-height: 50vh;
`;

const Spinner = () => (
  <SpinnerContainer direction="column" align="center" justify="center">
    <SpinnerWrapper align="center" justify="center">
      <Circle />
      <Auth0Logo />
    </SpinnerWrapper>
  </SpinnerContainer>
);

export default Spinner;
