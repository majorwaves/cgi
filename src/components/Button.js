import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Wrapper = styled.button`
  width: 100%;
  padding: ${props => props.large ? `2rem 2.5rem` : `1rem 2rem` };
  font-size: 12px;
  font-size: ${props => props.large ? `14px` : `12px` };
  font-weight: 600;
  font-family: ${props => props.theme.type.body};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: ${props => props.light ? 'white' : 'transparent' };
  color: ${props => props.light ? props.theme.color.medium : props.theme.color.dark };
  border: ${props => props.light ? `1px solid white` : `1px solid ${props.theme.color.dark}` };
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  @media ${device.laptop}{
    display: inline-block;
    display: inline-flex;
    width: auto;
    width: fit-content;
    padding: .5rem 1rem;
    padding: ${props => props.large ? `1rem 1.5rem` : `.5rem 1rem` };
  }

  &:hover {
    transform: translate(0, -2px);
    background: ${props => props.theme.color.dark};
    color: white;
  }
`;

const Icon = styled.div`
  margin-right: 2rem;
`;

const Button = ({ light, children, onClick, large, icon }) => (
  <Wrapper light={light} onClick={onClick} large={large}>
    {icon &&
      <Icon>{icon}</Icon>
    }
    {children}
  </Wrapper>
);

Button.propTypes = {
  light: PropTypes.bool,
  icon: PropTypes.node,
  large: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
