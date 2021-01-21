import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Hooks/UseFetch';
import { Photo_Get } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Loading from '../../../Helper/Loading';
import PhotoContent from '../PhotoContent/Photo';
import { Container } from './PhotoLink.style';
import Head from '../../../Helper/Head';

const PhotoLink = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = Photo_Get(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </Container>
    );
  else return null;
};

export default PhotoLink;
