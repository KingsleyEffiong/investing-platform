import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from'./Components/Navbar'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import  Preloader from './Components/Preloader';

function App() {
  return (
    <>
      < Preloader>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </ Preloader>
    </>
  );
}

export default App;
