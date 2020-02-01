import React from 'react';
import { Box, Text } from 'grommet';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { sortOptions, device } from 'settings';
import styled from 'styled-components';
import Select from '../Select';
import BackButton from '../BackButton';

const QuoteSortContainer = styled(Box)`
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const QuoteText = styled(Text)`
  @media ${device.tablet} {
    display: block;
    margin: 0 0 20px;
  }
`;


const QuoteSort = (props) => {
  const {
    onClick, isSearching, showSort, resultsCount,
  } = props;

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
    : <QuoteText size="xlarge">All Quotes</QuoteText>;

  const getBtnMargin = () => {
    const hasSearch = 'authorName' in query || 'text' in query;
    if (resultsCount === 0) return 'medium';
    return hasSearch ? 'small' : 'xlarge';
  };

  return (
    <QuoteSortContainer
      align="center"
      direction="row"
      justify="between"
      margin={{ top: 'xlarge', bottom: getBtnMargin() }}
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
    </QuoteSortContainer>
  );
};

QuoteSort.defaultProps = {
  showSort: true,
};

QuoteSort.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  resultsCount: PropTypes.number.isRequired,
  showSort: PropTypes.bool,
};

export default QuoteSort;
