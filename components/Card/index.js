import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'grommet';

const Card = ({
  quote, position, author, onClick, isSingle,
}) => (
  <Box
    as={!isSingle && 'a'}
    round="small"
    align="center"
    onClick={onClick}
    elevation="medium"
    background="white"
    margin={isSingle && '0 auto'}
    width={isSingle && { max: '780px' }}
    height={isSingle ? '640px' : null}
    pad={{ horizontal: 'xlarge', vertical: 'xxlarge' }}
  >
    <Text size={isSingle && 'xxlarge'} color="edward" margin={{ bottom: 'medium' }}>
      Quote #{position}
    </Text>
    <Text
      color="brand"
      textAlign="center"
      margin={{ bottom: 'medium' }}
      size={isSingle ? 'largest' : 'large'}
    >
      &ldquo;{quote}&rdquo;
    </Text>
    <Text size={isSingle ? 'xxxlarge' : 'large'} color="scorpion" margin={{ top: 'auto' }}>
      {author}
    </Text>
  </Box>
);

Card.defaultProps = {
  onClick: () => { },
  isSingle: false,
};

Card.propTypes = {
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSingle: PropTypes.bool,
  position: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Card;
