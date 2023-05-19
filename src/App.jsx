import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subitem from './Subitem'
import Card from './Card'
import Clock from './Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clock />
      <Card />
      <Subitem />
    </>
  )
}

export default App
