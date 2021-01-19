import React from 'react';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotoItens';
import useFetch from '../../../Hooks/UseFetch';
import { Photos_GET } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Loading from '../../../Helper/Loading';
import { Feed } from './FeedPhoto.style';

const FeedPhotos = (props) => {
  const { request, error, loading, data } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = Photos_GET({ page: 1, user: 0, total: 6 });
      await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <Feed className="animeLeft">
        {data.map((photo) => {
          return (
            <FeedPhotosItem
              photo={photo}
              setModalPhoto={props.setModalPhoto}
              key={photo.id}
            />
          );
        })}
      </Feed>
    );
  else return null;
};

export default FeedPhotos;
