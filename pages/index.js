import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  Card, QuoteSort, Button, Spinner, Wrapper,
} from 'components';
import {
  Grid, Box, Text,
} from 'grommet';
import useQuotesAPI from 'api';

const Index = ({ query }) => {
  // Using custom data fetching hook
  const [{
    data, isLoading, isError, page, resultsCount, pageCount,
  }, doFetch] = useQuotesAPI();
  // Next.js router
  const router = useRouter();
  // Every 'componentDidMount', read the query params and update the page accordingly
  useEffect(() => {
    doFetch({ pageSize: '6', ...query });
  }, []);

  useEffect(() => {
    doFetch({ pageSize: '6', ...query });
  }, [query]);

  const getMoreQuotes = () => {
    const newPage = page + 1;
    doFetch({ pageSize: 6, page: newPage });
    if ('page' in query) {
      query.page = newPage;
      router.push({ pathname: '/', query });
    } else {
      router.push({ pathname: '/', query: { page: newPage } });
    }
  };

  const renderCards = (quoteData, index) => {
    const { text, authorName, id } = quoteData;
    return (
      <Card
        key={index}
        quote={text}
        position={index + 1}
        onClick={() => router.push({ pathname: '/single', query: { id, ...query } })}
        author={authorName === '' ? <>&mdash;</> : authorName}
      />
    );
  };

  const QuoteGrid = () => (
    <>
      <Grid as="section" columns="376px">
        {data.length > 0 ? data.map(renderCards) : null}
      </Grid>
      <Button disabled={resultsCount === 0 || page === pageCount} onClick={getMoreQuotes} />
    </>
  );

  const handleBack = () => router.back();

  const isSearching = 'text' in query || 'authorName' in query;

  return (
    <main>
      <Wrapper row={false}>
        <QuoteSort isSearching={isSearching} onClick={handleBack} />
        {isSearching ? <Text size="xlarge" margin={{ bottom: 'large' }}>We found {resultsCount} results</Text> : null}
        {isError ? <Text>There was an error. Please try again.</Text> : null}
        {isLoading ? (
          <Box align="center" justify="center">
            <Spinner />
          </Box>
        ) : <QuoteGrid />}
      </Wrapper>
    </main>
  );
};

Index.getInitialProps = ({ query }) => ({ query });

Index.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Index;
