import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 class="text-3xl underline text-yellow-400">
    Hello world!
  </h1>
  <button class="btn bg-redPrimary">One</button>
    </div>
  )
}

export default App
