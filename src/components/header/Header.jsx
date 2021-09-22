import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { HeaderDiv, Logo, LoginOrRegister, Login, Register, Home } from '../ui/Header.styles'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    history.replace('/')
  }

  return (
    <div>
      <HeaderDiv>
        <Logo />
        {!authService.isAuthorized() ? (
          <>
            <LoginOrRegister>
              <NavLink to="/home">
                <Home>Home</Home>
              </NavLink>
              <NavLink to="/login">
                <Login>Login</Login>
              </NavLink>
              <NavLink to="/register">
                <Register>Register</Register>
              </NavLink>
            </LoginOrRegister>
          </>
        ) : (
          <NavLink to="" onClick={handleLogout}>
            Logout
          </NavLink>
        )}
      </HeaderDiv>
    </div>
  )
}

export default Header
