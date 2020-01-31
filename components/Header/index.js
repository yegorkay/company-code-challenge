import React from 'react';
import { Header as GHeader } from 'grommet';
import Wrapper from 'components/Wrapper';
import SearchInput from './SearchInput';
import Logo from './Logo';

const Header = () => (
  <GHeader
    background="white"
    border={{
      size: '1px',
      color: 'iron',
      side: 'bottom',
      style: 'solid',
    }}
    pad={{ vertical: 'medium' }}
  >
    <Wrapper>
      <Logo />
      <SearchInput />
    </Wrapper>
  </GHeader>
);

export default Header;
