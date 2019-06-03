import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'
import { device } from '../utils/devices'

const Image = styled.div`
  height: 200px;
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  @media ${device.laptop}{
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s all ease-in-out;
  }
`;

const Block = styled.div`
  position: relative;
  margin: 0 0 2rem 0;

  &:first-of-type{
    margin-right: 1rem;

    @supports (display: grid) {
      margin-right: 0;
    }
  }

  &:nth-of-type(2n){
    -ms-grid-column: 2;
  }

  @media ${device.laptop}{
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    ${Image} {
      img {
        transform: scale(1.02);
      }
    }
  }
`;

const Info = styled.div`
  background: white;
  padding: 1rem;
  height: 240px;

  @supports (display: grid) {
    height: auto;
  }

  @media ${device.laptop}{
    padding: 2rem 3rem;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.color.grey};
    line-height: 1.6em;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  pointer-events: none;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop}{
    height: 500px;
    display: block;
  }

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 48px;
    color: white;
    text-transform: uppercase;

    @media ${device.laptop}{
      font-size: 60px;
    }
  }
`;

const Asset = ({title, description, image, url}) => (
  <Block>
    <Title><h2>{title}</h2></Title>
    <Link to={url}>
      <Image><img src={image} alt={title} /></Image>
    </Link>
    <Info>
      <p>{description}</p>
      <Link to={url}><Button primary>Learn More</Button></Link>
    </Info>
  </Block>
);

export default Asset;
