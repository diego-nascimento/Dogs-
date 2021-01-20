import React from 'react';
import { Wrapper, Imagem, Skeleton } from './Image.style';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton />}
      <Imagem onLoad={handleLoad} alt={props.alt} {...props} />
    </Wrapper>
  );
};

export default Image;
