import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Asset from '../components/Asset'
import fund from '../images/fund-img.jpg'
import sma from '../images/sma-1.jpg'
import hero from '../images/hero.jpg'

const Main = styled.main`

`;

const Assets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${props => props.theme.color.bg};
`;

class Home extends Component {
  render() {
    return (
          <Main>
            <Assets>
              <Asset
                title='Fund I'
                city='Miami'
                image={fund}
                url='/platforms'
              />
              <Asset
                title='SMA'
                city='Miami'
                image={sma}
                url='/sma'
              />
            </Assets>
          </Main>
    );
  }
}

export default Home;
