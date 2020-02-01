import React, { useState } from 'react';
import { Header as GHeader, Box, Button } from 'grommet';
import Wrapper from 'components/Wrapper';
import styled from 'styled-components';
import { device } from 'settings';
import SearchInput from './SearchInput';
import Logo from './Logo';
import SearchIcon from './search.svg';

const SearchButton = styled(Button)`
  width: 12px;
  margin: 0 20px 0 0;

  svg {
    height: 12px;
    width: 12px;
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }
`;

const HeaderWrapper = styled(GHeader)`
  @media ${device.tablet} {
    padding: 0;
    border: none;
  }
`;

const Header = () => {
  const [showSearch, toggleSearch] = useState(false);
  const handleClick = () => toggleSearch(!showSearch);
  return (
    <HeaderWrapper
      background="white"
      border={{
        size: '1px',
        color: 'iron',
        side: 'bottom',
        style: 'solid',
      }}
      pad={{ vertical: 'medium' }}
    >
      <Wrapper noPad>
        <Box direction="row" justify="between" align="center">
          <Logo />
          <SearchButton onClick={handleClick}>
            <SearchIcon />
          </SearchButton>
        </Box>
        <SearchInput showSearch={showSearch} />
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
