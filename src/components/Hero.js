import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

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
  font-size: 64px;
  font-family: ${props => props.theme.type.heading};
  font-weight: 100;
  margin: 0 0 2rem 0;
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    z-index: 1;
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
