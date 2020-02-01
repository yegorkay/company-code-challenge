import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'grommet';
import styled from 'styled-components';
import { device } from 'settings';

const QuotePosition = styled(Text)`
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const SubText = styled(Text)`
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const CardWrapper = styled(Box)`
  @media ${device.tablet} {
    /* height: 400px; */
    height: unset;
    padding: 40px 32px;
  }
`;

const Card = ({
  quote, position, author, onClick, isSingle,
}) => (
  <CardWrapper
    round="small"
    align="center"
    onClick={onClick}
    elevation="medium"
    background="white"
    isSingle={isSingle}
    height={isSingle ? '640px' : null}
    margin={isSingle ? '0 auto' : null}
    width={isSingle ? { max: '780px' } : null}
    pad={{ horizontal: 'xlarge', vertical: 'xxlarge' }}
  >
    <QuotePosition
      color="edward"
      size={isSingle ? 'xxlarge' : null}
      margin={{ bottom: isSingle ? 'xlarge' : 'medium' }}
    >
      Quote #{position}
    </QuotePosition>
    <SubText
      color="brand"
      textAlign="center"
      margin={{ bottom: 'medium' }}
      size={isSingle ? 'largest' : 'large'}
    >
      &ldquo;{quote}&rdquo;
    </SubText>
    <SubText
      color="scorpion"
      margin={{ top: 'auto' }}
      size={isSingle ? 'xxxlarge' : 'large'}
    >
      {author}
    </SubText>
  </CardWrapper>
);

Card.defaultProps = {
  onClick: () => { },
  isSingle: false,
};

Card.propTypes = {
  author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onClick: PropTypes.func,
  isSingle: PropTypes.bool,
  position: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Card;
