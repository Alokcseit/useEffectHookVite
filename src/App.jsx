import { useState } from 'react'
import New from './New'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <New></New>
    </>
  )
}

export default App
