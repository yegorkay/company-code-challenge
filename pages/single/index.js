import React, { useEffect } from 'react';
import { Wrapper } from 'components';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Single = ({ query }) => {
  // Every 'componentDidMount', read the query params and update the page accordingly
  useEffect(() => {
    console.log(query)
  }, []);

  return (
    <main>
      <Wrapper row={false}>
        carousel
      </Wrapper>
    </main>
  );
};

Single.getInitialProps = ({ query }) => ({ query });

Single.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Single;
