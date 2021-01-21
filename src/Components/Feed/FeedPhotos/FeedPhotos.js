import React from 'react';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotoItens';
import useFetch from '../../../Hooks/UseFetch';
import { Photos_GET } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Loading from '../../../Helper/Loading';
import { Feed } from './FeedPhoto.style';

const FeedPhotos = ({ page, user, setInfinite, ...props }) => {
  const { request, error, loading, data } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = Photos_GET({
        page: page,
        user: user,
        total: total,
      });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.lenght < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

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
