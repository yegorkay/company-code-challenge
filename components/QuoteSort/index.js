import React from 'react';
import { Box, Text } from 'grommet';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { sortOptions } from 'settings';
import Select from '../Select';
import BackButton from '../BackButton';

const QuoteSort = ({ onClick, isSearching, showSort }) => {
  const router = useRouter();
  const { query } = router;

  const findSortIndex = sortOptions.findIndex((sort) => sort.value === query.sortBy);
  const index = findSortIndex !== -1 ? findSortIndex : 0;

  const [selectedOption, handleOption] = React.useState(sortOptions[index]);

  const handleSelect = (option) => {
    if ('sortBy' in query) {
      query.sortBy = option.value;
      router.push({ pathname: '/', query });
    } else {
      router.push({ pathname: '/', query: { ...query, sortBy: option.value } });
    }
    handleOption(option);
  };

  const SearchState = () => isSearching
    ? <BackButton onClick={onClick} />
    : <Text size="xlarge">All Quotes</Text>;

  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      margin={{ top: 'xlarge', bottom: 'small' }}
    >
      {showSort ? <SearchState /> : <BackButton onClick={onClick} />}
      {showSort ? (
        <Box direction="row" justify="between" align="center">
          <Text color="edward" margin={{ right: 'medium' }} size="medium">
            Sort by:
          </Text>
          <Select
            options={sortOptions}
            instanceId={111111110}
            value={selectedOption}
            onChange={handleSelect}
          />
        </Box>
      ) : null}
    </Box>
  );
};

QuoteSort.defaultProps = {
  showSort: true,
};

QuoteSort.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  showSort: PropTypes.bool,
};

export default QuoteSort;
