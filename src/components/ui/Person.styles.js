import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const PersonCardStyle = styled.div`
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid grey;
  height: 100%;
  padding: 10px;
  width: 350px;
  flex: 1 0 21%; /* explanation below */
`

export const PersonCardItem = styled.div`
  padding: 5px;
  align-content: center;
`

export const PersonItem = styled.div`
  display: flex;
`

export const PersonCardKey = styled.div`
  color: purple;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`

export const PersonCardValue = styled.div`
  color: purple;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
`

export const PersonAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
