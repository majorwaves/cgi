import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 12rem 4rem 4rem;
  background: white;
  color: ${props => props.theme.color.medium};
  height: 100vh;
  box-sizing: border-box;
  width: 30vw;
  z-index: 4;
  transform: ${props => props.open ? 'translate(0, 0)' : 'translate(30vw, 0)'};
  transition: 0.2s all ease-in-out;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    line-height: 6em;

    li {
      font-size: 48px;
      font-family: ${props => props.theme.type.heading};
    }
  }
`;

class Nav extends Component {

  render() {
    const { open } = this.props;

    return (
      <Menu open={open}>
        <ul>
          <li>The Firm</li>
          <li>Our Team</li>
          <li>Assets</li>
          <li>CGI Equity Fund</li>
          <li>Philanthrophy</li>
          <li>Media</li>
          <li>Contact</li>
        </ul>
      </Menu>
    );
  }

}

export default Nav;
