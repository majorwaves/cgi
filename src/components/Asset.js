import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const Block = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "image text";
  margin-bottom: 8rem;

  &:nth-of-type(even){
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "text image";
  }
`;

const Image = styled.div`
  height: 50vw;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
  grid-area: image;
  position: relative;
  z-index: 2;
  box-shadow: 7px 7px 20px 0px rgba(50, 50, 50, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 2rem 2rem 2rem;
  text-align: center;
  grid-area: text;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: ${props => props.theme.color.lightGrey};
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 24px;
    font-family: ${props => props.theme.type.body};
  }

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 48px;
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
