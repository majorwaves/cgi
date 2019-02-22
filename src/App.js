import React, { Component } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import Asset from './components/Asset'
import city from './images/city.jpg'
import nexus from './images/stuart.jpg'
import Quote from './components/Quote';

const Main = styled.main`

`;

const Assets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10vw;
  background: ${props => props.theme.color.bg};
  padding: 6rem 10vw;
`;

const Mission = styled.div`
  padding: 4rem 10vw;
  background: ${props => props.theme.color.bg};
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.05);

  strong {
    margin-bottom: 2rem;
    display: block;
    font-size: 48px;
    font-weight: normal;
    font-family: ${props => props.theme.type.heading};
    color: ${props => props.theme.color.medium};
  }

  p {
    color: rgba(0,0,0,0.5);
    line-height: 1.7em;
  }
`;

const theme = {
  type: {
    body: `'Montserrat', Helvetica, Arial, sans-serif`,
    heading: `'Playfair Display', Times, Georgia, serif`,

  },
  color: {
    light: 'rgb(0,150,219)',
    medium: 'rgb(3,66,140)',
    dark: 'rgb(0,38,99)',
    lightGrey: 'rgb(192,194,196)',
    bg:  'rgb(244,244,244)'
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
        <Header />
        <Main>
          <Hero
            title='CGI Merchant Group is a private-equity, alternative investment management firm.'
            buttonText='Learn More'
          />
        </Main>
        <Mission>
          <div><strong>Mission Statement</strong></div>
          <p>CGI Merchant Group is a private equity, alternative investment firm that capitalizes on commercial real estate and infrastructure. The firm’s nimble team, deep industry knowledge, and international network is positioned to create unique real estate opportunities that produce superior returns for stakeholders.Through this work, CGI Merchant Group has built a distinct culture; based upon contrarian views and an entrepreneurial approach to achieve exceptional long-term value for every client and community served.</p>
        </Mission>
        <Assets>
          <Asset
            title='Fund I'
            city='Miami'
            image={nexus}
          />
          <Asset
            title='SMA (1100)'
            city='Miami'
            image={city}
          />
        </Assets>
        <Quote />
        <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
