import React from 'react';
import { ReactComponent as Enviar } from '../../../Assets/enviar.svg';
import useFetch from '../../../Hooks/UseFetch';
import { Comment_POST } from '../../../services/Api';
import Error from '../../../Helper/Error';
import { Formulario, Botao, Textarea } from './PhotoCommentsForm.style';

const PhotoComentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');

  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = Comment_POST(id, { comment });
    const { json, response } = await request(url, options);

    if (response.ok) {
      setComments((comments) => [...comments, json]);
    }

    setComment('');
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <Textarea
        id="comment"
        name="comment"
        placeholder="Comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <Botao>
        <Enviar />
      </Botao>
      <Error error={error} />
    </Formulario>
  );
};

export default PhotoComentsForm;
