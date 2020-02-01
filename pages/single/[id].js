import React, { useEffect } from 'react';
import { ContentContainer, Slider } from 'components';
import PropTypes from 'prop-types';
import useQuotesAPI from 'api';

const Single = ({ query }) => {
  const [{
    data, isLoading, isError, resultsCount,
  }, doFetch] = useQuotesAPI();

  useEffect(() => {
    const fetchQuery = { ...query };
    delete fetchQuery.id;
    doFetch({ pageSize: '6', ...fetchQuery });
  }, []);

  return (
    <main>
      <ContentContainer
        fullWidth
        content={data.length > 0 ? (
          <Slider data={data} id={query.id} />
        ) : null}
        isError={isError}
        isLoading={isLoading}
        resultsCount={resultsCount}
      />
    </main>
  );
};

Single.getInitialProps = ({ query }) => ({ query });

Single.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Single;
