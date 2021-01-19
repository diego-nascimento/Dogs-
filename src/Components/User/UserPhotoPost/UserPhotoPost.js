import React from 'react';
import { PhotoPost, Preview } from './UserPhotoPost.style';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/UseFetch';
import { Photo_Post } from '../../../services/Api';
import Error from '../../../Helper/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);
    const token = localStorage.getItem('token');

    const { url, options } = Photo_Post(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <PhotoPost className={'animeLeft'}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="peso" type="number" name="peso" {...peso} />
        <Input label="idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      {img.preview && <Preview Image={img.preview}></Preview>}
    </PhotoPost>
  );
};

export default UserPhotoPost;
