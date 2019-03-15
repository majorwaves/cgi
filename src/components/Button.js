import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Wrapper = styled.button`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 12px;
  font-weight: 500;
  font-family: ${props => props.theme.type.body};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: ${props => props.primary ? 'transparent' : props.theme.color.dark };
  color: ${props => props.primary ? 'white' : props.theme.color.light };
  border: ${props => props.primary ? `1px solid white` : `1px solid ${props.theme.color.light}` };
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

const Button = ({ primary, children}) => (
  <Wrapper primary={primary}>
    {children}
  </Wrapper>
);

export default Button;
