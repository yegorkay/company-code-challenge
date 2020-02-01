import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';
import { device } from 'settings';
import styled from 'styled-components';

const ResultTextWrapper = styled(Text)`
  display: ${(props) => (props.isMobile ? 'none' : 'block')};

  @media ${device.tablet} {
    text-align: center;
    display: ${(props) => (props.isMobile ? 'block' : 'none')};
  }
`;

const ResultText = ({ resultsCount, isMobile }) => (
  <ResultTextWrapper
    size="xlarge"
    isMobile={isMobile}
    margin={{ bottom: 'large' }}
  >
    {resultsCount > 0 ? `We found ${resultsCount} results` : 'No results found'}
  </ResultTextWrapper>
);

ResultText.defaultProps = {
  isMobile: true,
};

ResultText.propTypes = {
  isMobile: PropTypes.bool,
  resultsCount: PropTypes.number.isRequired,
};

export default ResultText;
