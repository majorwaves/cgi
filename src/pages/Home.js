import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Asset from '../components/Asset'
import city from '../images/city.jpg'
import nexus from '../images/stuart.jpg'

const Main = styled.main`

`;

const Assets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5vw;
  background: ${props => props.theme.color.bg};
  padding: 3rem 2.5vw;
`;

class Home extends Component {
  render() {
    return (
          <Main>
            <Hero
              title='CGI Merchant Group is a private-equity, alternative investment management firm.'
              buttonText='Learn More'
            />
            <Assets>
              <Asset
                title='Fund I'
                city='Miami'
                image={nexus}
              />
              <Asset
                title='SMA'
                city='Miami'
                image={city}
              />
            </Assets>
          </Main>
    );
  }
}

export default Home;
