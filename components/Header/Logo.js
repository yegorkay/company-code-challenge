import React from 'react';
import { Box, Text } from 'grommet';
import NextLink from 'next/link';
import styled from 'styled-components';
import { device } from 'settings';
import Auth0Logo from './auth0-logo.svg';

const Link = styled.a`
  display: flex;
  cursor: pointer;

  @media ${device.tablet} {
    padding: 20px;
  }
`;

const Logo = () => (
  <NextLink href="/">
    <Link>
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
    </Link>
  </NextLink>
);

export default Logo;
