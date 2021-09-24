import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Card, CardContent, CardTitle, Form, FormContent, ForgotPass, LoginBtn } from '../styles/Pages.styles'

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState()

  const onSubmit = async (e) => {
    // TODO call login from authService.
    // Use history.replace to home page if login successes
    // and set error state if error

    e.preventDefault()

    authService
      .loginUser(login, password)
      .then(() => {
        window.sessionStorage.setItem('isLoggedIn', true)
        history.replace('/home')
      })
      .catch(() => setError(error))

    // try {
    //   authService.loginUser(login, password)
    //
    //   history.replace('/home')
    // } catch (e) {
    //   setError(error)
    // }
  }

  return (
    <Card>
      <CardContent id="card-content">
        <CardTitle id="card-title">
          <h2>Login</h2>
        </CardTitle>
        <Form onSubmit={onSubmit} error={error} defaultValues={{ login: '', password: '' }}>
          <label htmlFor="login" style={{ paddingTop: '13px', color: 'gray' }}>
            &nbsp;Username
          </label>
          <FormContent
            id="login"
            name="login"
            value={login}
            label="Login"
            rules={{ required: { message: 'Login is required', value: true } }}
            onChange={({ target }) => setLogin(target.value)}
          />
          <label htmlFor="password" style={{ paddingTop: '22px', color: 'gray' }}>
            &nbsp;Password
          </label>
          <FormContent
            name="password"
            value={password}
            label="Password"
            type="password"
            rules={{ required: { message: 'Password is required', value: true } }}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Link to="\" style={{ paddingTop: '22px', textDecoration: 'none' }}>
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
