import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subitem from './Subitem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Subitem />
    </>
  )
}

export default App
