import React from 'react';
import { Modal } from './FeedModal.styles';
import useFetch from '../../../Hooks/UseFetch';
import { Photo_GET } from '../../../services/Api';
import Error from '../../../Helper/Error';
import Loading from '../../../Helper/Loading';
import PhotoContent from '../../Photo/Photo';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function photoFetch() {
      const { url, options } = Photo_GET(photo.id);
      await request(url, options);
    }

    photoFetch();
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  );
};

export default FeedModal;
