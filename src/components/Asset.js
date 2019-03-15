import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'


const Image = styled.div`
  height: 500px;
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s all ease-in-out;
  }
`;

const Block = styled.div`
  position: relative;

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
  padding: 2rem 3rem;

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.color.grey};
    line-height: 1.6em;
  }

  button {
    border-color: ${props => props.theme.color.medium};
    color: ${props => props.theme.color.medium};
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  pointer-events: none;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
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
