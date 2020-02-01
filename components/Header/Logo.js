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

const LogoContainer = styled(Box)`
  @media ${device.tablet} {
    transform: scale(0.9);
    margin-right: 6px;
  }
`;

const LogoText = styled(Text)`
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const Logo = () => (
  <NextLink href="/">
    <Link>
      <Box direction="row" align="center">
        <LogoContainer
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
        </LogoContainer>
        <LogoText size="xlarge">Quotes</LogoText>
      </Box>
    </Link>
  </NextLink>
);

export default Logo;
