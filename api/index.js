import { useState, useEffect } from 'react';
import axios from 'axios';
/** Should be thrown in an ENV, but for the sake of exercises, this will do for now. */
const API_URL = 'https://auth0-exercise-quotes-api.herokuapp.com/api/quotes';

export default () => {
  // data and API states
  const [quoteData, setQuoteData] = useState({ quotes: [] });
  const [params, setParams] = useState({ pageSize: '6' });
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [resultsCount, setResultsCount] = useState(null);
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
        setPageCount(data.pagination.pageCount);
        setPage(data.pagination.page);
        setQuoteData(data.results);
        setResultsCount(data.pagination.rowCount);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params]);
  return [{
    data: quoteData, isLoading, isError, page, resultsCount, pageCount,
  }, setParams];
};
