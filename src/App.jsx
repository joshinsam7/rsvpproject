import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Invitation from './components/Invitation.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import Venue from './components/Venue.jsx'
import Showcase from './components/showcase.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Invitation />
      <About />
      <Form />
      <Showcase />
      <Venue />
      <Footer />
    </>
  )
}

export default App
