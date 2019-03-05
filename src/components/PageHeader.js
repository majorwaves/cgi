import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  height: 400px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Overlay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 10vw;

  h1 {
    font-size: 36px;
    font-family: ${props => props.theme.type.heading};
    padding: 1rem;
    background: rgba(0,0,0,0.6);
    color: white;
    display: inline-block;
    margin-bottom: 0;
  }

  p {
    padding: 1rem;
    background: rgba(0,0,0,0.6);
    color: white;
  }
`;

const PageHeader = ({image, title, text}) => (
  <Hero>
    <img src={image} alt={title} />
    <Overlay>
      <h1>{title}</h1>
      <p>{text}</p>
    </Overlay>
  </Hero>
);

export default PageHeader;
