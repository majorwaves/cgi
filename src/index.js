import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-136220855-2')

const history = createBrowserHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
});

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
