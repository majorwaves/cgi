import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const Block = styled.div`

`;

const Image = styled.div`
  height: 30vw;
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  background: white;
  padding: 1rem 2rem 2rem;
  text-align: center;

  h3 {
    color: ${props => props.theme.color.lightGrey};
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 16px;
    font-family: ${props => props.theme.type.body};
  }

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 36px;
    color: ${props => props.theme.color.dark};
  }
`;

const Asset = ({title, city, image, url}) => (
  <Block>
    <Image><img src={image} alt={title} /></Image>
    <Info>
      <h3>{city}</h3>
      <h2>{title}</h2>
      <Link to={url}><Button>Learn More</Button></Link>
    </Info>
  </Block>
);

export default Asset;
