import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button as GButton } from 'grommet';
import styled from 'styled-components';
import { device } from 'settings';

const ButtonWrapper = styled(Box)`
  @media ${device.tablet} {
    margin: 20px 0 20px;
  }
`;

const Button = ({ onClick }) => (
  <ButtonWrapper
    margin={{ top: 'large', bottom: 'xxlarge' }}
  >
    <GButton
      fill
      active
      onClick={onClick}
      label="Load more"
      alignSelf="center"
    />
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
