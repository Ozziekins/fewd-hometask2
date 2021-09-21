import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle, Form, FormContent, ForgotPass, LoginBtn } from '../styles/Pages.styles'

function Login() {
  return (
    <Card>
      <CardContent id="card-content">
        <CardTitle id="card-title">
          <h2>Login</h2>
        </CardTitle>
        <Form method="post">
          <label htmlFor="user-name" style={{ paddingTop: '13px', color: 'gray' }}>
            &nbsp;Username
          </label>
          <FormContent id="user-name" type="username" name="username" required />
          <label htmlFor="user-password" style={{ 'padding-top': '22px', color: 'gray' }}>
            &nbsp;Password
          </label>
          <FormContent id="user-password" type="password" name="password" required />
          <Link to="\" style={{ 'padding-top': '22px', 'text-decoration': 'none' }}>
            <ForgotPass id="forgot-pass">Forgot password?</ForgotPass>
          </Link>
          <LoginBtn id="login-btn" type="submit" name="submit" value="Login" />
        </Form>
      </CardContent>
    </Card>
  )
}

export default Login
