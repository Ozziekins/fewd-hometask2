import React from 'react'
import { PersonCardStyle } from '../ui/Person.styles'
import PersonInfo from './PersonInfo'

function PersonCard({ ...user }) {
  return (
    <div>
      <PersonCardStyle>
        <PersonInfo {...user} />
      </PersonCardStyle>
    </div>
  )
}

export default PersonCard
