import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardMe from './components/Card'
import CardPortfolio from './components/portfolioCards/CardPortfolio'
import Contact from './components/Contact'
import './styles/Nav.css'
import './components/portfolioCards/Portfolio.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CardMe/>
      <CardPortfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
