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

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <Photo>
      <Imagem>
        <img src={photo.src} alt={photo.title} />
      </Imagem>
      <Detalhes>
        <div>
          <Author>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
