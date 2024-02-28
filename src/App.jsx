import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardMe from './components/Card'
import './styles/Nav.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CardMe/>
      <Footer/>
    </>
  )
}

export default App
