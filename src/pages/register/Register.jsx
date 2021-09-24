import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Card, CardContent, CardTitle, Form, FormContent, SignupBtn } from '../styles/Pages.styles'

function Register() {
  const history = useHistory()
  const [error, setError] = useState()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState()

  const onSubmit = async (e) => {
    // TODO call register from authService.
    // Use history.replace to login page if register successes
    // and set error state if error

    e.preventDefault()

    authService
      .registerUser(login, password)
      .then(() => history.replace('/login'))
      .catch(() => setError(error))

    // try {
    //   authService.registerUser(login, password)
    //
    //   history.replace('/login')
    // } catch (e) {
    //   setError(error)
    // }
  }

  return (
    <Card>
      <CardContent id="card-content">
        <CardTitle id="card-title">
          <h2>Register</h2>
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
            rules={{ required: { message: 'Password is required', value: true, minLength: 8 } }}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && <p>{error}</p>}
          <SignupBtn id="signup-btn" type="submit" name="submit" value="Register" />
        </Form>
      </CardContent>
    </Card>
  )
}

export default Register
