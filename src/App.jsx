import { useState } from 'react'
import Navbar from './components/Navbar'
import './styles/Nav.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
