import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import Menu from './Nav'
import { Link } from 'react-router-dom'
import Social from './Social'
import { device } from '../utils/devices'
import { isBrowser } from 'react-device-detect'
import MobileNav from './MobileNav'

const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 4rem;
  padding: 0 5vw;
  z-index: 5;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;

  @media ${device.laptop}{
    position: relative;
    width: auto;
  }
`;

const Logo = styled.div`
  height: 60px;
  padding: 1rem 0;

  img {
    height: 100%;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  right: 5vw;

  span {
    margin-bottom: .5rem;
    height: 2px;
    width: 10vw;
    background: ${props => props.theme.color.dark};
    transition: 0.2s all ease-in-out;

    &:first-of-type {
      margin-top:  ${props => props.open ? '19px' : '0'};
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-of-type(2) {
      opacity: ${props => props.open ? 0 : 1 };
    }

    &:last-of-type {
      margin-top:  ${props => props.open ? '-19px' : '0'};
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
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
        <Link to='/'><Logo><img src={logo} alt='logo' /></Logo></Link>
        {isBrowser
          ?
            <>
              <Menu />
              <Social />
            </>
          :
            <>
              <MobileMenu open={navOpen} onClick={this.handleMenuToggle}>
                <span /><span /><span />
              </MobileMenu>
              <MobileNav open={navOpen} />
            </>
        }
      </Head>
    );
  }

}

export default Header;
