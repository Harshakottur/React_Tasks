import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from a given API endpoint.
 * Manages loading, data, and error states.
 * 
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {object} - Returns an object containing the fetched data, loading state, and any error encountered.
 */
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
