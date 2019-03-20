import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: relative;
  background: black;
  min-height: 500px;
  overflow: hidden;
  background: url(${props => props.bg});
  background-attachment: fixed;
  background-position: center 800px;
  background-size: cover;

  a {
    text-decoration: none;
  }

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

const Title = styled.h1`
  color: ${props => props.gradient ? 'black' : 'white' };
  font-size: 56px;
  font-family: ${props => props.theme.type.heading};
  font-weight: 100;
  margin: 0 0 2rem 0;
`;

const Hero = ({ video, image, title, subtitle, gradient, buttonText }) => (
  <Wrapper bg={image}>
    <Content gradient={gradient}>
      <Title gradient={gradient}>{title}</Title>
      <Link to='/the-firm'><Button light>{buttonText}</Button></Link>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Hero;
