import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardMe from './components/Card'
import CardPortfolio from './components/CardPortfolio'
import './styles/Nav.css'
import '/styles/Portfolio.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CardMe/>
      <CardPortfolio/>
      <Footer/>
    </>
  )
}

export default App
