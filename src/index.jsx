import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import App from './app'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </div>
  </Router>,
  document.getElementById('app')
)
