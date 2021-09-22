import React from 'react'
import { WelcomePage, Welcome } from '../styles/Pages.styles'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <Welcome>Welcome! </Welcome>
      <Footer />
    </div>
  )
}

export default Home
