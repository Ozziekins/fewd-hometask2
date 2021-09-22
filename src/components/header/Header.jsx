import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { LogoTitle, Title, HeaderDiv, Logo, LoginOrRegister, Login, Register, Home, Logout } from '../ui/Header.styles'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    window.sessionStorage.setItem('isLoggedIn', false)
    history.replace('/')
  }

  return (
    <div>
      <HeaderDiv>
        <LogoTitle>
          <Logo />
          <Title> FEWD Hometask 2</Title>
        </LogoTitle>
        {!authService.isAuthorized() ? (
          <>
            <LoginOrRegister>
              <NavLink to="/">
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
          <LoginOrRegister>
            <NavLink to="/">
              <Home>Home</Home>
            </NavLink>
            <NavLink to="/home">
              <Home>View Users</Home>
            </NavLink>
            <NavLink to="/" onClick={handleLogout}>
              <Logout>Logout</Logout>
            </NavLink>
          </LoginOrRegister>
        )}
      </HeaderDiv>
    </div>
  )
}

export default Header
