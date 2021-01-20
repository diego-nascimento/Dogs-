import React from 'react';
import Image from '../../../Helper/Image/Image';
import { Photo } from './FeedPhotoItens.style';

const FeedPhotoItens = (props) => {
  function handleClick() {
    props.setModalPhoto(props.photo);
  }

  return (
    <Photo onClick={handleClick}>
      <Image src={props.photo.src} alt={props.photo.title} />
      <span>{props.photo.acessos} acessos</span>
    </Photo>
  );
};

export default FeedPhotoItens;
