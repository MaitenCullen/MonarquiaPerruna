import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'react-daisyui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='bg-btnColor'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-btnColor'>MONARQUIA PERRUNA</h1>
      <p className='bg-basic-primary'>Subtitulo dec pagina</p>
      <div className="card">
      <button className="btn btn-primary">Button</button>
        <button onClick={() => setCount((count) => count + 1)} className='bg-btnColor'>
          count is {count}
        </button>
        <Button color="btnColor">Click me!</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
