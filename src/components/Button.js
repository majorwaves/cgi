import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${props => props.theme.type.body};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  background: ${props => props.primary ? props.theme.color.dark : 'transparent' };
  color: ${props => props.primary ? 'white' : props.theme.color.light };
  border: ${props => props.primary ? `2px solid ${props.theme.color.dark}` : `2px solid ${props.theme.color.light}` };
  cursor: pointer;
  transition: 0.2s all ease-in-out;

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
