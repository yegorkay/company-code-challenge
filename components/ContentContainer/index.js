import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Text } from 'grommet';
import Wrapper from '../Wrapper';
import QuoteSort from '../QuoteSort';
import Spinner from '../Spinner';
import ResultText from '../ResultText';

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
      <QuoteSort
        resultsCount={resultsCount}
        showSort={!isSinglePage}
        isSearching={isSearching}
        onClick={handleBack}
      />
      {isSearching ? <ResultText isMobile={false} resultsCount={resultsCount} /> : null}
      {isError ? <Text>There was an error. Please try again.</Text> : null}
    </>
  );

  const loadContent = isLoading ? <Spinner /> : content;
  const loadTopContent = isLoading ? null : <TopContent />;

  if (fullWidth) {
    return (
      <>
        <Wrapper row={false}>
          {loadTopContent}
        </Wrapper>
        {content}
      </>
    );
  }

  return (
    <Wrapper row={false}>
      {loadTopContent}
      {!isError ? loadContent : null}
    </Wrapper>
  );
};

ContentContainer.defaultProps = {
  content: null,
  fullWidth: false,
  resultsCount: 0,
};

ContentContainer.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullWidth: PropTypes.bool,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultsCount: PropTypes.number,
};

export default ContentContainer;
