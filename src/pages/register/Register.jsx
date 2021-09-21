import React from 'react'
import { Card, CardContent, CardTitle, Form, FormContent, SignupBtn } from '../styles/Pages.styles'

function Register() {
  return (
    <Card>
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
