import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { LogoTitle, Title, HeaderDiv, Logo, LoginOrRegister, Login, Register, Home } from '../ui/Header.styles'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    history.replace('/login')
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
          <LoginOrRegister>
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </LoginOrRegister>
        )}
      </HeaderDiv>
    </div>
  )
}

export default Header
