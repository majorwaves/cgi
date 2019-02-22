import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import video from '../images/city.mp4'

const Wrapper = styled.section`
  position: relative;
  background: black;
  height: 100vh;
  overflow: hidden;

  video {
    width: 100vw !important;
    height: 100vh !important;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    border: 2px solid white;
    color: white;
    transition: 0.15s all ease-in-out;

    &:hover {
      background: white;
      color: ${props => props.theme.color.medium};
    }
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-family: ${props => props.theme.type.heading};
  font-weight: 100;
  margin: 0 0 2rem 0;
`;

const Sub = styled.h2`
  color: white;
  font-weight: 200;
  font-size: 48px;
  width: 40vw;
  margin-top: 0;
`;

const Hero = ({ image, title, subtitle, buttonText }) => (
  <Wrapper>
    <ReactPlayer
      playing
      muted
      loop
      className='hero_video'
      url={video}
    />
    <Content>
      <Title>{title}</Title>
      <Sub>{subtitle}</Sub>
      <p><Button>{buttonText}</Button></p>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Hero;
