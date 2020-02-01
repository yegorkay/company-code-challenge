import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button as GButton } from 'grommet';

const Button = ({ onClick }) => (
  <Box
    border={{
      color: 'iron',
      size: '1px',
      style: 'solid',
      side: 'top',
    }}
    pad={{ top: 'large' }}
    margin={{ top: 'large', bottom: 'xxlarge' }}
  >
    <GButton
      fill
      active
      onClick={onClick}
      label="Load more"
      alignSelf="center"
    />
  </Box>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
