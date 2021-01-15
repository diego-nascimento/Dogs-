import axios from 'axios';
import React from 'react';

const UseAxios = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, method, data, options) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await axios({
        method: method,
        url: url,
        data: data,
        options,
      });
      if (response.status !== 200) throw new Error(response.message);
    } catch (error) {
      response = null;
    } finally {
      setData(response.data);
      setLoading(false);
      return response.data;
    }
  }, []);

  return { data, error, loading, request };
};

export default UseAxios;
