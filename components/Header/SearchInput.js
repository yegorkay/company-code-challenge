import React from 'react';
import { Box, TextInput } from 'grommet';
import styled from 'styled-components';
import { colors } from 'settings';
import Select from '../Select';

const SearchContainer = styled(Box)`
  border-radius: 4px;
  input {
    border-left: 1px solid ${colors.iron};
    border-radius: 0;
  }
`;

const SearchInput = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <SearchContainer
      direction="row"
      border={{
        color: 'iron',
        size: '1px',
        style: 'solid',
      }}
      align="center"
    >
      <Select
        secondary
        value="Author"
        name="Search Filter"
        options={['Author', 'Quote']}
        onChange={(option) => console.log(option)}
      />
      <TextInput
        plain
        value={searchValue}
        placeholder="Enter your search term"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchInput;
