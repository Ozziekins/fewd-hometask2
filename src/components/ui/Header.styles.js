import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const LoginOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: end;
`

export const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: auto;
  margin: 0;
`

export const Logo = styled.div`
  background-image: url('./images/logo.png');
  width: 70px;
  height: auto;
`

export const Login = styled.div`
  color: blueviolet;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  margin: auto;
`

export const Register = styled.div`
  color: blueviolet;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  padding: 20px;
`
