import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1 class="text-3xl underline text-yellow-400">
        Hello world!
      </h1>
      <button className="btn bg-redPrimary">One</button>
    </div>
    <div>
      <p className="bg-yellowPrimary">
        Prueba delfin de push y pull request
      </p>

    </div>
    </>
    
  )
}

export default App
