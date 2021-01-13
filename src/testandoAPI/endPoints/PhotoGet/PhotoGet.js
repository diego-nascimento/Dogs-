import React from 'react';
import { Formulario } from './style';
import api from '../../Axios';

const PhotoGet = () => {
  const [photo, setPhoto] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.get(`/api/photo/${photo}`);

    console.log(response.data);
    return response.data;
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <input
        type="text"
        value={photo}
        onChange={({ target }) => setPhoto(target.value)}
      />
      <button>Enviar</button>
    </Formulario>
  );
};

export default PhotoGet;
