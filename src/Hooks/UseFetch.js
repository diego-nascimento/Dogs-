import React from 'react';

const UseAxios = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();
      if (response.ok === false) throw new Error('Erro ao cadastrar usuario');
    } catch (err) {
      json = null;
      console.log(err.message);
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};

export default UseAxios;
