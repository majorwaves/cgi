import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import Menu from './Nav';

const Head = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5vw;
  z-index: 5;
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`;

const MenuButton = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: .75rem;
  width: 50px;
  cursor: pointer;
  z-index: 10;
  top: 3rem;
  right: 5vw;

  span {
    width: 100%;
    display: block;
    height: 2px;
    border-radius: 2px;
    background: white;
    transition: 0.2s all ease-in-out;
  }

  &.open {
    span {
      background: ${props => props.theme.color.light};

      &:first-of-type {
        opacity:  0;
      }

      /* &:nth-of-type(2){
        opacity:  0;
      } */

      &:last-of-type {
        opacity:  0;
      }
    }
  }
`;

class Header extends Component {

  state = {
    navOpen: false
  }

  handleMenuToggle = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {

    const { navOpen } = this.state;

    return (
      <Head>
        <Logo><img src={logo} alt='logo' /></Logo>
        <MenuButton className={navOpen ? 'open' : null} onClick={() => { this.handleMenuToggle() }}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Menu open={navOpen} />
      </Head>
    );
  }

}

export default Header;
