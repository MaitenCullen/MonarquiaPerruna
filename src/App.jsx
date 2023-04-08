
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Home } from './screens/Home';
import { Chalecos } from './screens/Chalecos';
import { DogID } from './screens/DogID';
import { Nosotros } from './screens/Nosotros';
import { Preguntas } from './screens/Preguntas';
import Navbar from './components/Navbar';


function App() {
  return (
    <div  className="App">
      <Navbar/>
      <section>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Chalecos' element={<Chalecos />} />
            <Route path='/DogID' element={<DogID />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/PreguntasFrecuentes' element={<Preguntas />} />
          </Routes>
        </section>
        <div className='footerDiv'>
            <Footer/>
        </div>
    </div>   
  )
}

export default App
