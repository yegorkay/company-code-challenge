import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'grommet';
import PropTypes from 'prop-types';
import { headerOptions } from 'settings';
import Select from '../Select';
import Input from '../Input';
import SearchContainer from './SearchContainer';
import SearchIcon from './search.svg';
import CloseIcon from './close.svg';

const SearchInput = ({ showSearch }) => {
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

  const clearSearch = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const canClose = ('text' in query) || ('authorName' in query);
  const canRemoveValue = searchValue === query.authorName || searchValue === query.text;

  return (
    <SearchContainer
      showSearch={showSearch || canClose}
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
      <form onSubmit={onSubmit}>
        <Input
          plain
          value={searchValue}
          onChange={handleInput}
          placeholder="Enter your search term"
        />
        <Button onClick={canClose ? clearSearch : null}>
          {canRemoveValue ? <CloseIcon /> : <SearchIcon />}
        </Button>
      </form>
    </SearchContainer>
  );
};

SearchInput.propTypes = {
  showSearch: PropTypes.bool.isRequired,
};

export default SearchInput;
