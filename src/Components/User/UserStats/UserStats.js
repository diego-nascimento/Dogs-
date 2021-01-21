import React from 'react';
import Head from '../../../Helper/Head';
import useFetch from '../../../Hooks/UseFetch';
import { GET_STATS } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Loading from '../../../Helper/Loading';
const UserStatsGraphs = React.lazy(() =>
  import('../UserStatsGraphs/UserStatsGraphs'),
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
};

export default UserStats;
