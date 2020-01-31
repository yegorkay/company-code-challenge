import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'grommet';

const Card = ({
  quote, position, author, onClick,
}) => (
  <Box
    as="a"
    round="small"
    align="center"
    onClick={onClick}
    elevation="medium"
    background="white"
    pad={{ horizontal: 'xlarge', vertical: 'xxlarge' }}
  >
    <Text color="edward" margin={{ bottom: 'medium' }}>
      Quote #{position}
    </Text>
    <Text
      size="large"
      color="brand"
      textAlign="center"
      margin={{ bottom: 'medium' }}
    >
      &ldquo;{quote}&rdquo;
    </Text>
    <Text size="medium" color="scorpion" margin={{ top: 'auto' }}>
      {author}
    </Text>
  </Box>
);

Card.propTypes = {
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Card;
