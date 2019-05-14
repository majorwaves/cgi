import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import ContactForm from './ContactForm'
import SubNav from './SubNav'
import navMarker from '../images/nav-marker.svg'
import Search from './Search'
import SearchForm from './SearchForm'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '10',
    cursor                : 'auto'
  }
};

const Menu = styled.nav`
  color: ${props => props.theme.color.medium};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: calc(60px + 2rem);

  .nav {
    padding: 0;
    margin: 0;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 40vw;
    min-width: 700px;
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
      color: ${props => props.theme.color.light};
    }
  }

  a {
    color: ${props => props.theme.color.medium};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.color.light};
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
    console.log('hey')
    this.setState({ searchOpen: !this.state.searchOpen })
  }

  render() {

    const firmNav = [
      {
        title: 'About Us',
        url: '/the-firm',
        text: "CGI Merchant Group is a private-equity, alternative investment management firm.",
        items: [
          {
            title: 'Overview',
            url: '/the-firm',
            text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
          },
          {
            title: 'Investment Philosopy',
            url: '/the-firm#investment-philosophy',
            text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
          },
          {
            title: 'Portfolio',
            url: '/the-firm#portfolio',
            text: 'CGI Merchant Group is a private-equity, alternative investment management firm.'
          }
        ]
      },
      {
        title: 'Our Team',
        url: '/team',
        text: "CGI Merchant Group has attracted the most talented and experienced professionals in the industry."
      }
    ]

    return (
      <Menu open={this.props.open}>
        <ul className='nav main'>
          <Item className='has-subnav'>
            <NavLink to='/the-firm'>The Firm</NavLink>
            <SubNav items={firmNav} />
          </Item>
          <Item><NavLink to='/social-impact'>Social Impact</NavLink></Item>
          <Item><NavLink to='/media'>Media</NavLink></Item>
          <Item><NavLink to ='/contact'>Contact</NavLink></Item>
          <Item><Search toggleOpen={this.handleSearchOpen} /></Item>
        </ul>
        <Modal isOpen={this.state.searchOpen} onRequestClose={this.handleSearchOpen} contentLabel='Search' style={customStyles} overlayClassName='Modal_Overlay'>
          <SearchForm />
        </Modal>
      </Menu>
    );
  }

}

export default Nav;
