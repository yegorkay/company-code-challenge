import React from 'react';
import { Box, Text } from 'grommet';
import Auth0Logo from './auth0-logo.svg';

const Logo = () => (
  <Box direction="row" align="center">
    <Box
      height="100%"
      justify="center"
      margin={{ right: 'medium' }}
      pad={{ right: 'medium' }}
      border={{
        color: 'mine-shaft',
        size: '1px',
        style: 'solid',
        side: 'right',
      }}
    >
      <Auth0Logo />
    </Box>
    <Text size="xlarge">Quotes</Text>
  </Box>
);

export default Logo;
