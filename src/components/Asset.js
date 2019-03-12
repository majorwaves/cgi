import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const Block = styled.div`
  position: relative;
`;

const Image = styled.div`
  height: 80vh;
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 1rem 2rem 2rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    border-color: white;
    color: white;

    &:hover {
      background: white;
      color: ${props => props.theme.color.medium};
      transition: 0.15s all ease-in-out;
    }
  }

  h3 {
    color: white;
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 24px;
    font-family: ${props => props.theme.type.body};
  }

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 64px;
    color: white;
  }
`;

const Asset = ({title, city, image, url}) => (
  <Block>
    <Image><img src={image} alt={title} /></Image>
    <Info>
      <h3>{city}</h3>
      <h2>{title}</h2>
      <Link to={url}><Button ghost light>Learn More</Button></Link>
    </Info>
  </Block>
);

export default Asset;
