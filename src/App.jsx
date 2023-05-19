import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subitem from './Subitem'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
      <Subitem />
    </>
  )
}

export default App
