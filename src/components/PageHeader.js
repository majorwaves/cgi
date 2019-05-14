import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Hero = styled.div`
  height: 300px;
  position: relative;

  @media ${device.laptop}{
    height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${props => props.bottom ? 'bottom' : 'center'};
  }
`

const Overlay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 5vw;
  width: 90vw;

  @media ${device.laptop}{
    width: auto;
  }

  h1 {
    font-size: 30px;
    font-family: ${props => props.theme.type.heading};
    padding: 1rem;
    background: rgba(0,0,0,0.6);
    color: white;
    display: inline-block;
    margin-bottom: 0;

    @media ${device.laptop}{
      font-size: 36px;
    }
  }

  p {
    padding: 1rem;
    background: rgba(0,0,0,0.6);
    color: white;
  }
`;

const PageHeader = ({image, title, text, bottom}) => (
  <Hero bottom={bottom}>
    <img src={image} alt={title} />
    <Overlay>
      <h1>{title}</h1>
      {typeof text !== 'undefined'
        ? <p>{text}</p>
        : null
      }
    </Overlay>
  </Hero>
);

export default PageHeader;
