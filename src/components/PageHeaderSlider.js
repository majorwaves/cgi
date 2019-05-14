import React from 'react'
import styled, { keyframes } from 'styled-components'
import { device } from '../utils/devices'

const fade = keyframes`
  0% {opacity: 0;}
  20% {opacity: 1;}
  50% {opacity: 1;}
  80% {opacity: 0;}
  100% {opacity: 0;}
`

const Hero = styled.div`
  height: 300px;
  position: relative;
  background: black;

  @media ${device.laptop}{
    height: 600px;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${props => props.bottom ? 'bottom' : 'center'};
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-duration: 6s;

    &.second {
      animation-delay: -3s;
    }
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

const PageHeaderSlider = ({image, title, text, bottom, secondImage}) => (
  <Hero bottom={bottom}>
    <img className='first' src={image} alt={title} />
    <img className='second' src={secondImage} alt={title} />
    <Overlay>
      <h1>{title}</h1>
      {typeof text !== 'undefined'
        ? <p>{text}</p>
        : null
      }
    </Overlay>
  </Hero>
);

export default PageHeaderSlider;
