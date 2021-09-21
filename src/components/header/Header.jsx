import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderDiv, Logo, LoginOrRegister, Login, Register } from '../ui/Header.styles'

function Header() {
  return (
    <div>
      <HeaderDiv>
        <Logo />
        <LoginOrRegister>
          <Link to="/login">
            <Login>Login</Login>
          </Link>
          <Link to="/register">
            <Register>Register</Register>
          </Link>
        </LoginOrRegister>
      </HeaderDiv>
    </div>
  )
}

export default Header
