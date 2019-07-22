import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { device } from '../utils/devices'
import ReactPlayer from 'react-player'

const Wrapper = styled.section`
  position: relative;
  background: black;
  overflow: hidden;
  height: 60vh;
  background: url(${props => props.bg});
  background-position: ${props => props.top ? 'top' : 'center'};
  background-size: cover;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.5);

  @media ${device.laptop}{
    min-height: 700px;
    height: 80vh;
    background-attachment: fixed;
    margin-top: -92px;
  }

  a {
    text-decoration: none;
  }

  .player {
    position: absolute;
    width: 100% !important;
    height: 100% !important;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.color.medium};
    z-index: 1;
    opacity: .2;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;
  width: 90vw;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media ${device.laptop}{
    width: 50vw;
    min-width: 900px;
  }
`;

const Title = styled.h1`
  color: ${props => props.gradient ? 'black' : 'white' };
  font-size: 30px;
  font-family: ${props => props.theme.type.heading};
  font-weight: 100;
  margin: 0 0 2rem 0;

  @media ${device.laptop}{
    font-size: 56px;
  }
`;

const Hero = ({ video, image, title, subtitle, gradient, buttonText, top}) => (
  <Wrapper bg={image} top={top}>
    <Content gradient={gradient}>
      <Title gradient={gradient}>{title}</Title>
      <Link to='/the-firm'><Button light>{buttonText}</Button></Link>
    </Content>
    {video &&
      <ReactPlayer
        className='player'
        url={video}
        playing
        playsInline
        muted
        loop
      />
    }
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Hero;
