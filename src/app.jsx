import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import DefaultHome from './pages/home/DefaultHome'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <DefaultHome />
        </Route>
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App
