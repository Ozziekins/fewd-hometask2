import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Card, CardContent, CardTitle, Form, FormContent, ForgotPass, LoginBtn } from '../styles/Pages.styles'

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    // TODO call login from authService.
    // Use history.replace to home page if login successes
    // and set error state if error
    authService
      .login(login, password)
      .then(() => history.replace('/'))
      .catch(() => setError(error))
  }

  return (
    <Card onSubmit={onSubmit} error={error}>
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
          {error && <p>{error}</p>}
          <LoginBtn id="login-btn" type="submit" name="submit" value="Login" />
        </Form>
      </CardContent>
    </Card>
  )
}

export default Login
