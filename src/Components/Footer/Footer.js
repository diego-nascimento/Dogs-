import React from 'react';

import { Foot } from './Footer.style';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <Foot>
      <Dogs />
      <p>Dogs. Alguns Direitos Reservados</p>
    </Foot>
  );
};

export default Footer;
