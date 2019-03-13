import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Wrapper = styled.section`
  position: relative;
  background: black;
  height: 60vh;
  overflow: hidden;
  background: url(${props => props.bg});
  background-attachment: fixed;
  background-position: bottom center;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.color.light};
    z-index: 1;
    mix-blend-mode: multiply;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;
  width: 50vw;
  box-sizing: border-box;
  height: 60vh;
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
  font-size: 56px;
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

const Hero = ({ video, image, title, subtitle, gradient }) => (
  <Wrapper bg={image}>
    <Content gradient={gradient}>
      <Title gradient={gradient}>{title}</Title>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gradient: PropTypes.bool
}

export default Hero;
