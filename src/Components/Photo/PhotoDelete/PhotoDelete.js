import React from 'react';
import { Botao } from './PhotoDelete.style';
import useFetch from '../../../Hooks/UseFetch';
import { Photo_DELETE } from '../../../services/Api';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = Photo_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <Botao>Deletando...</Botao>
      ) : (
        <Botao onClick={handleClick}>Deletar</Botao>
      )}
    </>
  );
};

export default PhotoDelete;
