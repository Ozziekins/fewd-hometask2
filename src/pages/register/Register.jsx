import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardContent, CardTitle, Form, FormContent, SignupBtn } from '../styles/Pages.styles'
import authService from '../../services/auth.service'

function Register() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    // TODO call register from authService.
    // Use history.replace to login page if register successes
    // and set error state if error
    authService
      .register(login, password)
      .then(() => history.replace('/'))
      .catch(() => setError(error))
  }

  return (
    <Card onSubmit={onSubmit}>
      <CardContent id="card-content">
        <CardTitle id="card-title">
          <h2>Register</h2>
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
          <SignupBtn id="signup-btn" type="submit" name="submit" value="Register" />
        </Form>
      </CardContent>
    </Card>
  )
}

export default Register
