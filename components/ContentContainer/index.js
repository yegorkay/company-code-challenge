import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  Box, Text,
} from 'grommet';
import Wrapper from '../Wrapper';
import QuoteSort from '../QuoteSort';
import Spinner from '../Spinner';

const ContentContainer = (props) => {
  const {
    isError, content, isLoading, resultsCount, fullWidth,
  } = props;

  const router = useRouter();
  const handleBack = () => router.back();

  const isSearching = 'text' in router.query || 'authorName' in router.query;
  const isSinglePage = router.pathname.indexOf('/single') !== -1;

  const TopContent = () => (
    <>
      <QuoteSort showSort={!isSinglePage} isSearching={isSearching} onClick={handleBack} />
      {isSearching ? <Text size="xlarge" margin={{ bottom: 'large' }}>We found {resultsCount} results</Text> : null}
      {isError ? <Text>There was an error. Please try again.</Text> : null}
    </>
  );

  if (fullWidth) {
    return (
      <>
        <Wrapper row={false}>
          <TopContent />
        </Wrapper>
        {content}
      </>
    );
  }

  return (
    <Wrapper row={false}>
      <TopContent />
      {isLoading ? (
        <Box align="center" justify="center">
          <Spinner />
        </Box>
      ) : content}
    </Wrapper>
  );
};

ContentContainer.defaultProps = {
  fullWidth: false,
};

ContentContainer.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fullWidth: PropTypes.bool,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultsCount: PropTypes.number.isRequired,
};

export default ContentContainer;
