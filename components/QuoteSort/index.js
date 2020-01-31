import React from 'react';
import { Box, Text } from 'grommet';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { sortOptions } from 'settings';
import Select from '../Select';
import BackButton from '../BackButton';

const QuoteSort = ({ onClick, isSearching }) => {
  const router = useRouter();
  const { query } = router;
  const [selectedOption, handleOption] = React.useState(sortOptions[0]);

  const handleSelect = (option) => {
    if ('sortBy' in query) {
      query.sortBy = option.value;
      router.push({ pathname: '/', query });
    } else {
      router.push({ pathname: '/', query: { ...query, sortBy: option.value } });
    }
    handleOption(option);
  };

  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      margin={{ top: 'xlarge', bottom: 'small' }}
    >
      {isSearching
        ? <BackButton onClick={onClick} />
        : <Text size="xlarge">All Quotes</Text>}
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
    </Box>
  );
};

QuoteSort.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default QuoteSort;
