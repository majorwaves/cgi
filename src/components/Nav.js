import React, { Component } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import ContactForm from './ContactForm'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Menu = styled.nav`
  color: ${props => props.theme.color.medium};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: '. search' 'navOne navTwo';

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-area: navTwo;

    li {
      text-transform: uppercase;
      font-family: ${props => props.theme.type.sans};
      margin-right: 2rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 11px;

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
            bottom: -21px;
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
        margin: 0;
      }
    }

    &.main {
      justify-content: flex-start;
      grid-area: navOne;

      li {
        font-weight: 800;
        font-size: 16px;

        &.active {
          position: relative;

          &:after {
            bottom: -20px;
          }
        }
      }
    }
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

    return (
      <Menu>
        <ul className='main'>
          <li><NavLink to='/the-firm'>The Firm</NavLink></li>
          <li>Platform</li>
          <li><NavLink to='/team'>Team</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to='/market'>Market</NavLink></li>
          <li><NavLink to='/social-impact'>Social Impact</NavLink></li>
          <li class='link' onClick={this.handleOpenModal}>Contact</li>
        </ul>
        <Search />
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleOpenModal} contentLabel='Contact' style={customStyles}>
          <ContactForm />
        </Modal>
      </Menu>
    );
  }

}

export default Nav;
