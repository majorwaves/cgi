import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import Menu from './Nav'
import { Link } from 'react-router-dom'

const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 4rem;
  padding: 1.5rem 5vw;
  z-index: 5;
  box-sizing: border-box;
  background: white;
`;

const Logo = styled.div`
  height: 60px;

  img {
    height: 100%;
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

    return (
      <Head>
        <Link to='/'><Logo><img src={logo} alt='logo' /></Logo></Link>
        <Menu />
      </Head>
    );
  }

}

export default Header;
