import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import styled from 'styled-components';
import { device } from 'settings';

const WrapperContainer = styled(Box)`
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    padding: ${(props) => (props.noPad ? '0' : '0 20px')};;
  }
`;

const Wrapper = ({ children, row, noPad }) => (
  <WrapperContainer
    flex="grow"
    noPad={noPad}
    margin="0 auto"
    justify="between"
    width={{ max: '1172px' }}
    pad={{ horizontal: '10px' }}
    direction={row ? 'row' : 'column'}
  >
    {children}
  </WrapperContainer>
);

Wrapper.defaultProps = {
  noPad: false,
  row: true,
};

Wrapper.propTypes = {
  noPad: PropTypes.bool,
  row: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
