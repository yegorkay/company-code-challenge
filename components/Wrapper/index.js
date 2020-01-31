import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Wrapper = ({ children, row }) => (
  <Box
    flex="grow"
    margin="0 auto"
    justify="between"
    width={{ max: '1172px' }}
    pad={{ horizontal: '10px' }}
    direction={row ? 'row' : 'column'}
  >
    {children}
  </Box>
);

Wrapper.defaultProps = {
  row: true,
};

Wrapper.propTypes = {
  row: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
