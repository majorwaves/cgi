import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import ContactForm from './ContactForm'
import SubNav from './SubNav'
import navMarker from '../images/nav-marker.svg';

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
  height: calc(48px + 2rem);

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
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;


  &.has-subnav {
    cursor: pointer;

    &:hover {
      background: url(${navMarker}) no-repeat;
      background-position: center bottom;

      .subnav {
        display: block;
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

    &.active {
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
    }

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
    modalOpen: false
  }

  handleOpenModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {

    const firmNav = [
      {
        title: 'Overview',
        url: '/the-firm',
        text: "Right here we'll put a blurb about the firm",
      },
      {
        title: 'Leadership',
        url: '/leadership',
        text: "Right here we'll put a blurb about our team"
      }
    ]

    const platformNav = [
      {
        title: 'Fund I',
        url: '/fund',
        text: "Right here we'll put the blurb about Fund I",
        items:[
          {
            title: 'Overview',
            url: '/fund/overview'
          },
          {
            title: 'Strategy',
            url: '/fund/strategy'
          },
          {
            title: 'Portfolio',
            url: '/fund/portfolio'
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
            The Firm
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
        </ul>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleOpenModal} contentLabel='Contact' style={customStyles} overlayClassName='Modal_Overlay'>
          <ContactForm />
        </Modal>
      </Menu>
    );
  }

}

export default Nav;
