import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <div className="App">
      <b>{count.current}</b>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default App
