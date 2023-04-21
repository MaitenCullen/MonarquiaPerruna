
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Home } from './screens/Home';
import { DogID } from './screens/DogID';
import { Nosotros } from './screens/Nosotros';
import { Preguntas } from './screens/Preguntas';
import Navbar from './components/Navbar';
import { Productos } from './screens/Productos';
import Contacto from './screens/Contacto';
import 'animate.css';





function App() {
  return (
    <div  className="App">
      <Navbar/>
      <section className='sectionApp'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/DogID' element={<DogID />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/PreguntasFrecuentes' element={<Preguntas />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
        </section>
        <div className='footerDiv'>
            <Footer/>
        </div>
    </div>   
  )
}

export default App
