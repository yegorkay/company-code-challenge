import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  Card, QuoteSort, Button, Spinner,
} from 'components';
import Wrapper from 'components/Wrapper';
import { Grid, Box, Text } from 'grommet';
import axios from 'axios';
/** Should be thrown in an ENV, but for the sake of exercises, this will do for now. */
const API_URL = 'https://auth0-exercise-quotes-api.herokuapp.com/api/quotes';

const useQuotesAPI = () => {
  // data and API states
  const [quoteData, setQuoteData] = useState({ quotes: [] });
  const [params, setParams] = useState({ pageSize: 6 });
  const [page, setPage] = useState(1);
  // async state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await axios(API_URL, {
          params,
        });
        setPage(data.pagination.page);
        setQuoteData(data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params]);
  return [{
    data: quoteData, isLoading, isError, page,
  }, setParams];
};

const Index = ({ query }) => {
  // Using custom data fetching hook
  const [{
    data, isLoading, isError, page,
  }, doFetch] = useQuotesAPI();
  // Next.js router
  const router = useRouter();
  // Every 'componentDidMount', read the query params and update the page accordingly
  useEffect(() => doFetch({ pageSize: 6, ...query }), []);

  const getMoreQuotes = () => {
    const newPage = page + 1;
    doFetch({ pageSize: 6, page: newPage });
    router.push(`/?page=${newPage}`);
  };

  const renderCards = (quoteData, index) => {
    const { text, authorName } = quoteData;
    return (
      <Card
        key={index}
        quote={text}
        position={index + 1}
        onClick={() => alert(`hello ${index + 1}`)}
        author={authorName === '' ? 'Unknown' : authorName}
      />
    );
  };

  const QuoteGrid = () => (
    <>
      <Grid as="section" columns="376px">
        {data.length && data.map(renderCards)}
      </Grid>
      <Button onClick={getMoreQuotes} />
    </>
  );

  return (
    <main>
      <Wrapper row={false}>
        <QuoteSort />
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
