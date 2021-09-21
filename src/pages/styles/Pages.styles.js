import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const Label = styled.label`
  font-family: Roboto, sans-serif;
  font-size: 11pt;
`

export const ForgotPass = styled.legend`
  color: purple;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  margin-top: 3px;
  text-align: left;
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid grey;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px 5px #e6cfc0;
  height: 529px;
  margin: 6rem auto 8.1rem auto;
  width: 372px;
`

export const CardContent = styled.div`
  padding: 12px 44px;
`

export const CardTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  padding-bottom: 23px;
  padding-top: 13px;
  color: purple;
`

export const LoginBtn = styled.input`
  background: blueviolet;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`

export const SignupBtn = styled.input`
  background: purple;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

export const FormContent = styled.input`
  background: #ffffff;
  outline: none;
  padding-top: 14px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 100%;
  height: 25px;
`

export const WelcomePage = createGlobalStyle`
  body {
    background: purple;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }
`

export const Welcome = styled.div`
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: xxx-large;
`
