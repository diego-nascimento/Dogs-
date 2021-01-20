import React from 'react';
import {
  Photo,
  Imagem,
  Detalhes,
  Visualizacoes,
  Titulo,
  Atributos,
  Author,
} from './Photo.style';
import { Link } from 'react-router-dom';
import PhotoComents from './PhotoComents/PhotoComents';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete/PhotoDelete';
import Image from '../../Helper/Image/Image';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  return (
    <Photo>
      <Imagem>
        <Image src={photo.src} alt={photo.title} />
      </Imagem>
      <Detalhes>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <Visualizacoes>{photo.acessos}</Visualizacoes>
          </Author>
          <Titulo>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Titulo>
          <Atributos>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </Atributos>
        </div>
      </Detalhes>
      <PhotoComents id={photo.id} comments={comments} />
    </Photo>
  );
};

export default PhotoContent;
