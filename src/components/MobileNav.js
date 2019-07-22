import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import navMarker from '../images/nav-marker.svg'

const Menu = styled.div`
  height: auto;
  position: fixed;
  left: 100vw;
  width: 100vw;
  border-top: 1px solid rgba(0,0,0,0.12);
  top: 92px;
  background: ${props => props.theme.color.medium};
  color: white;
  box-sizing: border-box;
  z-index: 100;
  will-change: transform, opacity;
  opacity: ${props => props.open ? 1 : 0 };
  transition: 0.2s all ease-in-out;
  transform: ${props => props.open ? 'translate(-100vw, 0)' : 'none' };
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), 0 -18px 60px -10px rgba(0,0,0,.025);
`;

const Nav = styled.nav`
  padding: 2rem 0;
  margin: 0;
  list-style: none;
  position: relative;
`;

const Item = styled.li`
  text-transform: uppercase;
  font-family: ${props => props.theme.type.sans};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.1rem;
  padding: 1rem 2rem;

  &.has-subnav {
    cursor: pointer;

    &:hover {
      background: url(${navMarker}) no-repeat;
      background-position: center bottom;

      .subnav {
        transform: translate(-100px, 0);
      }
    }
  }

  &.link {
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color.light};
    }
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: rgba(255,255,255,0.4);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

class MobileNav extends Component {

  state = {
    modalOpen: false,
    searchOpen: false
  }

  handleOpenModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  handleSearchOpen = () => {
    this.setState({ searchOpen: !this.state.searchOpen })
  }

  render() {

    return (
      <Menu open={this.props.open}>
        <Nav onClick={this.props.handleClick}>
          <Item><NavLink to='/the-firm'>The Firm</NavLink></Item>
          <Item><NavLink to='/portfolio'>Portfolio</NavLink></Item>
          <Item><NavLink to='/team'>Team</NavLink></Item>
          <Item><NavLink to='/social-impact'>Social Impact</NavLink></Item>
          <Item><NavLink to='/media'>Media</NavLink></Item>
          <Item><NavLink to ='/contact'>Contact</NavLink></Item>
        </Nav>
      </Menu>
    );
  }

}

export default MobileNav;
