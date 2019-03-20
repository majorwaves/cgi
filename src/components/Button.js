import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Wrapper = styled.button`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 12px;
  font-weight: 600;
  font-family: ${props => props.theme.type.body};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: transparent;
  color: ${props => props.light ? 'white' : props.theme.color.light };
  border: ${props => props.light ? `1px solid white` : `1px solid ${props.theme.color.light}` };
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  @media ${device.laptop}{
    display: inline-flex;
    width: fit-content;
  }

  &:hover {
    transform: translate(0, -2px);
  }
`;

const Button = ({ light, children}) => (
  <Wrapper light={light}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  light: PropTypes.bool
}

export default Button;
