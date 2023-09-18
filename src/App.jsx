import React from 'react'
import './App.css'

import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Experience from  './components/experience/Experience'
import Services from  './components/services/Services'
import Portfolio from  './components/portfolio/Portfolio'
import Contact from  './components/contact/Contact'
import Footer from  './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default App