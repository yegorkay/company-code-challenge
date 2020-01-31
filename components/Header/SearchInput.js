import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, TextInput, Button } from 'grommet';
import styled from 'styled-components';
import { headerOptions, colors } from 'settings';
import Select from '../Select';
import SearchIcon from './search.svg';
import CloseIcon from './close.svg';

const SearchContainer = styled(Box)`
  border-radius: 4px;
  height: 40px;
  min-width: 478px;

  input,
  [contenteditable] {
    caret-color: ${colors.cerulean};
  }

  input {
    font-size: 16px;
    line-height: 21px;
    border-radius: 0;
  }

  form {
    width: 75%;
  }
`;

const Form = styled.form`
  display: flex;
`;

const SearchInput = () => {
  const router = useRouter();
  const { query } = router;
  const { authorName = '', text = '' } = router.query;

  const [searchValue, setSearchValue] = React.useState((authorName || text) || '');
  const [selectedOption, handleOption] = React.useState(headerOptions[0]);

  useEffect(() => {
    setSearchValue(authorName || text);
  }, [router.query]);

  const valueInQuery = (param, replacement) => {
    const { value } = selectedOption;
    return param in query && value === replacement;
  };

  const replaceQuery = (param, replacement) => {
    delete query[param];
    query[replacement] = searchValue;
    router.push({ pathname: '/', query: { ...query, page: 1 } });
  };

  const handleRouter = () => {
    const searchQuery = { [selectedOption.value]: searchValue };

    if ('id' in query) delete query.id;
    if (valueInQuery('text', 'authorName')) replaceQuery('text', 'authorName');
    if (valueInQuery('authorName', 'text')) replaceQuery('authorName', 'text');

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

  const clearQuery = (param) => {
    delete query[param];
    router.push({ pathname: '/', query: { ...query, page: 1 } });
  };

  const clearSearch = (e) => {
    e.preventDefault();
    if ('text' in query) clearQuery('text');
    if ('authorName' in query) clearQuery('authorName');
  };

  const canClose = ('text' in router.query) || ('authorName' in router.query);

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
      <Form onSubmit={canClose ? clearSearch : onSubmit}>
        <TextInput
          plain
          value={searchValue}
          onChange={handleInput}
          placeholder="Enter your search term"
        />
        <Button type="submit" margin={{ right: 'medium' }}>
          {canClose ? <CloseIcon /> : <SearchIcon />}
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchInput;
