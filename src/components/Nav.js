import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import navMarker from '../images/nav-marker.svg'

const Menu = styled.nav`
  color: ${props => props.theme.color.medium};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: calc(60px + 2rem);
  z-index: 10;

  .nav {
    padding: 0;
    margin: 0;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 50vw;
    min-width: 440px;
  }
`;

const Item = styled.li`
  text-transform: uppercase;
  font-family: ${props => props.theme.type.sans};
  font-weight: 600;
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;

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
      border-bottom: 2px solid white;
      /* color: ${props => props.theme.color.light}; */
    }
  }

  a {
    color: ${props => props.dark ? props.theme.color.medium : 'white'};
    text-shadow: ${props => props.dark ? `none` : `0px 0px 30px rgba(0,0,0,0.6);`};
    text-decoration: none;
    transition: 0.2s padding ease-in-out;
    position: relative;

    &:hover {
      &:after {
        height: 2px;
        content: "";
        position: absolute;
        bottom: -4px;
        background: ${props => props.dark ? props.theme.color.medium : 'white'};
        width: 100%;
        left: 0;
      }
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

class Nav extends Component {

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

    // const firmNav = [
    //   {
    //     title: 'About Us',
    //     url: '/the-firm',
    //     text: "CGI Merchant Group is a private-equity, alternative investment management firm.",
    //     items: [
    //       {
    //         title: 'Overview',
    //         url: '/the-firm',
    //         text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
    //       },
    //       {
    //         title: 'Investment Philosopy',
    //         url: '/the-firm#philosophy',
    //         text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
    //       },
    //       {
    //         title: 'Portfolio',
    //         url: '/the-firm#portfolio',
    //         text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
    //       }
    //     ]
    //   }
    // ]

    return (
      <Menu {...this.props}>
        <ul className='nav main'>
          <Item {...this.props}><NavLink to='/the-firm'>The Firm</NavLink></Item>
          <Item {...this.props}><NavLink to='/portfolio'>Portfolio</NavLink></Item>
          <Item {...this.props}><NavLink to='/team'>Team</NavLink></Item>
          <Item {...this.props}><NavLink to='/social-impact'>Social Impact</NavLink></Item>
          <Item {...this.props}><NavLink to='/media'>Media</NavLink></Item>
          <Item {...this.props}><NavLink to='/contact'>Contact</NavLink></Item>
        </ul>
      </Menu>
    );
  }

}

export default Nav;
