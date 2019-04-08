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

    /* &.active {
      position: relative;

      &:after {
        position: absolute;
        bottom: -40px;
        content: "";
        height: 6px;
        width: 100%;
        background: ${props => props.theme.color.lightGrey};
        display: block;
      }
    } */

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
        title: 'Overview',
        url: '/the-firm',
        text: "CGI Merchant Group is a private-equity, alternative investment management firm.",
      },
      {
        title: 'Leadership',
        url: '/leadership',
        text: "CGI Merchant Group has attracted the most talented and experienced professionals in the industry."
      }
    ]

    const platformNav = [
      {
        title: 'Fund I',
        url: '/fund',
        text: "High-quality institutional-grade commercial real estate properties with a value-added strategy.",
        items:[
          {
            title: 'Overview',
            url: '/fund',
            text: 'High-quality institutional-grade commercial real estate properties with a value-added strategy.'
          },
          {
            title: 'Strategy',
            url: '/fund#strategy',
            text: 'Income-driven, targeted, proprietary real estate solutions with low volatility.'
          },
          {
            title: 'Portfolio',
            url: '/fund/portfolio',
            text: 'Institutional quality, Class A assets in office and mixed-use properties'
          }
        ]
      },
      {
        title: 'SMA',
        url: '/sma',
        text: "Right here we'll put the blurb about SMA",
        items: [
          {
            title: 'Overview',
            url: '/sma/overview'
          },
          {
            title: 'Assets',
            url: '/sma/assets'
          },
        ]
      }
    ]

    return (
      <Menu>
        <ul className='nav main'>
          <Item className='has-subnav'>
            <NavLink to='/the-firm'>The Firm</NavLink>
            <SubNav items={firmNav} />
          </Item>
          <Item className='has-subnav'>
            Platforms
            <SubNav items={platformNav} />
          </Item>
          <Item><NavLink to='/market'>Market</NavLink></Item>
          <Item><NavLink to='/social-impact'>Social Impact</NavLink></Item>
          <Item><NavLink to='/media'>Media</NavLink></Item>
          <Item className='link' onClick={this.handleOpenModal}>Contact</Item>
          <Item><Search toggleOpen={this.handleSearchOpen} /></Item>
        </ul>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleOpenModal} contentLabel='Contact' style={customStyles} overlayClassName='Modal_Overlay'>
          <ContactForm />
        </Modal>
        <Modal isOpen={this.state.searchOpen} onRequestClose={this.handleSearchOpen} contentLabel='Search' style={customStyles} overlayClassName='Modal_Overlay'>
          <SearchForm />
        </Modal>
      </Menu>
    );
  }

}

export default Nav;
