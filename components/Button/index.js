import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button as GButton } from 'grommet';

const Button = ({ onClick, disabled }) => (
  <Box
    border={{
      color: 'iron',
      size: '1px',
      style: 'solid',
      side: 'top',
    }}
    pad={{ top: 'large' }}
    margin={{ top: 'large' }}
  >
    <GButton
      fill
      active
      disabled={disabled}
      onClick={onClick}
      label="Load more"
      alignSelf="center"
    />
  </Box>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
