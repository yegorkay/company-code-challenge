import React from 'react';
import { Box, Text } from 'grommet';
import Select from '../Select';

const QuoteSort = () => (
  <Box
    align="center"
    direction="row"
    justify="between"
    margin={{ vertical: 'xlarge' }}
  >
    <Text size="xlarge">All Quotes</Text>
    <Box direction="row" justify="between" align="center">
      <Text color="edward" margin={{ right: 'medium' }} size="medium">
        Sort by:
      </Text>
      <Select
        name="Sort Quotes"
        value="Quotes: Z-A"
        onChange={(option) => console.log(option)}
        options={['Author: A-Z', 'Author: Z-A', 'Quotes: A-Z', 'Quotes: Z-A']}
      />
    </Box>
  </Box>
);

export default QuoteSort;
