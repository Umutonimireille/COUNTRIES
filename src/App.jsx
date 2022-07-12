import { useState } from 'react'

import './App.css'
import Country from './components/country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Country/>
    
    </div>
  )
}

export default App
