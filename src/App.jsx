import { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import './App.css'
import Nav from './components/Nav'
import FooterComponent from './components/FooterComponent'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'></Redirect>
        </Route>
        <Route path='/home'>
          <LandingPage/>
        </Route>
        <Route path='/products'>
          <ProductPage></ProductPage>
        </Route>
      </Switch>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
