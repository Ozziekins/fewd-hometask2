import styled, { createGlobalStyle } from 'styled-components'
import logo from './images/logo.png'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const Logo = styled.div`
  background-image: url(${logo});
  width: 70px;
  height: 70px;
  background-size: contain;
  margin: auto;
  float: left;
`

export const LoginOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: end;
  float: right;
`

export const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: auto;
  margin: 0;
  display: flex;
  padding: 20px;
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

export const Home = styled.div`
  color: blueviolet;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  padding: 20px;
`
