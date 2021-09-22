import React from 'react'
import { PersonAvatar, PersonItem, PersonCardItem, PersonCardKey, PersonCardValue } from '../ui/Person.styles'

function PersonInfo({ avatar, name, email, address }) {
  return (
    <div>
      <PersonCardItem>
        <PersonAvatar>
          <img src={avatar} alt="avatar" style={{ borderRadius: '50%' }} />
        </PersonAvatar>
        <PersonItem>
          <PersonCardKey> Name: </PersonCardKey>
          <PersonCardValue> {name} </PersonCardValue>
        </PersonItem>
        <PersonItem>
          <PersonCardKey> Email: </PersonCardKey>
          <PersonCardValue> {email} </PersonCardValue>
        </PersonItem>
        <PersonItem>
          <PersonCardKey> Address: </PersonCardKey>
          <PersonCardValue> {address} </PersonCardValue>
        </PersonItem>
      </PersonCardItem>
    </div>
  )
}

export default PersonInfo
