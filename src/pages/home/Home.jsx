import React, { useEffect, useState } from 'react'
import { WelcomePage, HomeInfo } from '../styles/Pages.styles'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import authService from '../../services/auth.service'
import userService from '../../services/user.service'
import PersonCard from '../../components/person/PersonCard'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (authService.isAuthorized()) {
      // Run data fetching in this effect
      // TODO set loading state to true
      // TODO call 'userService' to start data fetching, set 'Some error happened' to error state in catch block,
      // set loading state to false in finally block
      // set users state in then block.
      // ---- promise.then((data) => {}).catch((error) => {}).finally(() => {}) ====
      setLoading(true)
      userService
        .getUsers()
        .then((data) => setUsers(data))
        .catch(() => setError('Some error happened'))
        .finally(() => setLoading(false))
    } else {
      // TODO reset users state
      setUsers([])
    }
  }, [authService.isAuthorized()])

  return (
    <div>
      <Header />
      <WelcomePage />
      <HomeInfo>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {users.map((user) => (
          // TODO extend template to display all data (besides id)
          <PersonCard key={user.id} {...user} />
        ))}
      </HomeInfo>
      <Footer />
    </div>
  )
}

export default Home
