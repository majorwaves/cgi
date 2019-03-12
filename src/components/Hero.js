import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Wrapper = styled.section`
  position: relative;
  background: black;
  height: 50vh;
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
  left: 10vw;
  width: 80vw;
  box-sizing: border-box;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 2;

  button {
    border: ${props => props.gradient ? '2px solid black' : '2px solid white' };
    color: ${props => props.gradient ? 'black' : 'white' };
    transition: 0.15s all ease-in-out;

    &:hover {
      background: white;
      color: ${props => props.theme.color.medium};
    }
  }
`;

const Title = styled.h1`
  color: ${props => props.gradient ? 'black' : 'white' };
  font-size: 48px;
  font-family: ${props => props.theme.type.heading};
  font-weight: 100;
  margin: 0 0 2rem 0;
`;

const Image = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = ({ video, image, title, subtitle, buttonText, gradient }) => (
  <Wrapper>
    {video &&
        <ReactPlayer
          playing
          muted
          loop
          className='hero_video'
          url={video}
        />
    }
    {image &&
      <Image><img alt={title} src={image} /></Image>
    }
    <Content gradient={gradient}>
      <Title gradient={gradient}>{title}</Title>
      <p><Button>{buttonText}</Button></p>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
  gradient: PropTypes.bool
}

export default Hero;
