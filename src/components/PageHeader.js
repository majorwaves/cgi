import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Hero = styled.div`
  position: relative;
  height: ${props => props.unpadded ? `800px` : `400px` };

  @media ${device.laptop}{
    height: 300px;
    margin-top: -92px;
    height: 600px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${props => props.bw ? `grayscale(100)` : `none` };
    object-position: ${props => props.bottom ? 'bottom' : 'center'};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: black;
    height: 100%;
    opacity: ${props => props.darken ? props.darken / 100 : 0};
  }
`

const Overlay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 5vw;
  width: 90vw;
  z-index: 5;

  @media ${device.laptop}{
    width: ${props => props.unpadded ? `90vw` : `auto` };
    top: auto;
  }

  h1 {
    font-size: 24px;
    font-family: ${props => props.theme.type.heading};
    padding: ${props => props.unpadded ? `0 0 1rem` : `1rem`};
    background: ${props => props.unpadded ? 'none' : `rgba(0,0,0,0.6)` };
    color: white;
    display: inline-block;
    margin-bottom: 0;

    @media ${device.laptop}{
      font-size: 36px;
    }
  }

  p {
    padding: ${props => props.unpadded ? `0` : `1rem`};
    background: ${props => props.unpadded ? 'none' : `rgba(0,0,0,0.6)` };
    color: white;
  }

  ul {
    margin: 2rem 0;
    padding: 0 0 0 2rem;
    color: white;
    line-height: 1.6em;

    li {

    }
  }
`;

const PageHeader = ({image, title, text, bottom, darken, unpadded, html, bw}) => (
  <Hero bottom={bottom} darken={darken} unpadded={unpadded} bw={bw}>
    <img src={image} alt={title} />
    <Overlay unpadded={unpadded}>
      <h1>{title}</h1>
      {typeof text !== 'undefined' &&
        <p>{text}</p>
      }
      {typeof html !== 'undefined' &&
        html
      }
    </Overlay>
  </Hero>
);

export default PageHeader;
