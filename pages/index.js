import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  Card, Button, ContentContainer, Grid,
} from 'components';
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
        onClick={() => router.push({ pathname: `/single/${id}`, query: { ...query } })}
        author={authorName === '' ? <>&mdash;</> : authorName}
      />
    );
  };

  const canLoadMore = !(resultsCount === 0 || page === pageCount);

  const QuoteGrid = () => (
    <>
      <Grid noResults={data.length > 0}>
        {data.length > 0 ? data.map(renderCards) : null}
      </Grid>
      {canLoadMore ? <Button onClick={getMoreQuotes} /> : null}
    </>
  );

  return (
    <main>
      <ContentContainer
        content={<QuoteGrid />}
        isError={isError}
        isLoading={isLoading}
        resultsCount={resultsCount}
      />
    </main>
  );
};

Index.getInitialProps = ({ query }) => ({ query });

Index.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Index;
