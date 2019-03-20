import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Asset from '../components/Asset'
import fund from '../images/fund-img.jpg'
import sma from '../images/bridge.jpg'
import hero from '../images/hero_2.jpg'

const Main = styled.main`

`;

const Assets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  background: ${props => props.theme.color.bg};
  padding: 1rem;

  a {
    text-decoration: none;
  }
`;

class Home extends Component {
  render() {
    return (
          <Main>
            <Hero
              title='CGI Merchant Group is a private-equity, alternative investment management firm.'
              buttonText='Read More'
              image={hero}
            />
            <Assets>
              <Asset
                title='Fund I'
                city='Miami'
                image={fund}
                url='/fund'
                description="Right here we'll put a blurb about the fund. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu eros sit amet est finibus lacinia."
              />
              <Asset
                title='SMA'
                city='Miami'
                image={sma}
                url='/sma'
                description="Right here we'll put a blurb about the fund. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu eros sit amet est finibus lacinia."
              />
            </Assets>
          </Main>
    );
  }
}

export default Home;
