import { useState } from 'react'
import { Route, Switch, Exact} from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import FooterComponent from './components/FooterComponent'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route>
          <LandingPage path='./home'/>
        </Route>
      </Switch>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
