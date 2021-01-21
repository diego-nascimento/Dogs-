import { createGlobalStyle, keyframes } from 'styled-components';

const animeLeft = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`;

export default createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    padding-top: 4rem;    
  }

  h1, h2, h3, h4, p{
    margin: 0px;
  }

  ul, li{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img{
    display: block;
    max-width: 100%;
  }

  button, input{
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  a{
    text-decoration: none;
    color: #333;
  }

  .container{
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto; 
  }

  .mainContainer{
    margin-top: 4rem;
  }

  .anime-Left{
    opacity: 0;
    transform: translateX(-20px);
    animation: ${animeLeft} .3s forwards;
  }

  .Title{
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    font-weight: bold;
    z-index: 1;
  }

  .Title::after{
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }

a.active {
  background: white;
  box-shadow: 0 0 0 3px #fea;
  border-color: red;
}

.App{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem)
}

.AppBody{
  flex: 1;
}

.VictoryContainer {
  height: initial !important;
}

 

`;
