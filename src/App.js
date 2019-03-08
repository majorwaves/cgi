import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheFirm from './pages/TheFirm'
import Fund from './pages/Fund'
import Market from './pages/Market'
import SMA from './pages/SMA'
import Team from './pages/Team'
import SocialImpact from './pages/SocialImpact'

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
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/the-firm' component={TheFirm} />
            <Route path='/market' component={Market} />
            <Route path='/fund' component={Fund} />
            <Route path='/sma' component={SMA} />
            <Route path='/social-impact' component={SocialImpact} />
            <Route path='/team' component={Team} />
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
