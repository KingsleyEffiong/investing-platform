import './App.css';
import { BrowserRouter,Routers,Router} from 'react-router-dom';
import Navbar from'./Components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    </>
  );
}

export default App;
