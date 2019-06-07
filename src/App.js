import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheFirm from './pages/TheFirm'
import Media from './pages/Media'
import Foundation from './pages/Foundation'
import Team from './pages/Team'
import Contact from './pages/Contact'
import SocialImpact from './pages/SocialImpact'
import { device } from './utils/devices'
import './App.css'

const theme = {
  type: {
    body: `'Montserrat', Helvetica, Arial, sans-serif`,
    heading: `'Playfair Display', Times, Georgia, serif`,

  },
  color: {
    light: 'rgb(0,150,219)',
    medium: 'rgb(3,66,140)',
    dark: 'rgb(0,38,99)',
    grey: 'rgb(92, 92, 92)',
    lightGrey: 'rgb(192,194,196)',
    bg:  'rgb(244,244,244)'
  }
}

const Main = styled.div`
  margin-top: 92px;

  @media ${device.laptop}{
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/the-firm' component={TheFirm} />
              <Route path='/media' component={Media} />
              <Route path='/contact' component={Contact} />
              <Route path='/foundation' component={Foundation} />
              <Route path='/social-impact' component={SocialImpact} />
              <Route exact path='/team' component={Team} />
            </Switch>
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
