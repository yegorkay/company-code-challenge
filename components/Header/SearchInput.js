import React from 'react';
import { useRouter } from 'next/router';
import { Box, TextInput } from 'grommet';
import styled from 'styled-components';
import { headerOptions, colors } from 'settings';
import Select from '../Select';

const SearchContainer = styled(Box)`
  border-radius: 4px;
  height: 40px;

  input,
  [contenteditable] {
    caret-color: ${colors.cerulean};
  }
  input {
    border-radius: 0;
  }
`;

const Form = styled.form`
  display: flex;
`;

const SearchInput = () => {
  const router = useRouter();
  const { authorName, text } = router.query;

  const [searchValue, setSearchValue] = React.useState((authorName || text) || '');
  const [selectedOption, handleOption] = React.useState(headerOptions[0]);

  const valueInQuery = (param, replacement) => {
    const { query } = router;
    const { value } = selectedOption;
    return param in query && value === replacement;
  };

  const handleRouter = () => {
    const { query } = router;
    const searchQuery = { [selectedOption.value]: searchValue };

    if (valueInQuery('text', 'authorName')) {
      delete query.text;
      query.authorName = searchValue;
      router.push({ pathname: '/', query: { ...query, page: 1 } });
    }

    if (valueInQuery('authorName', 'text')) {
      delete query.authorName;
      query.text = searchValue;
      router.push({ pathname: '/', query: { ...query, page: 1 } });
    }

    router.push({
      pathname: '/',
      query: { ...query, ...searchQuery, page: 1 },
    });
  };

  const handleInput = (event) => setSearchValue(event.target.value);

  const handleSelect = (option) => handleOption(option);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchValue) handleRouter();
  };

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
        options={headerOptions}
        instanceId={111111111}
        value={selectedOption}
        onChange={handleSelect}
      />
      <Form onSubmit={onSubmit}>
        <TextInput
          plain
          value={searchValue}
          onChange={handleInput}
          placeholder="Enter your search term"
        />
      </Form>
    </SearchContainer>
  );
};

export default SearchInput;
