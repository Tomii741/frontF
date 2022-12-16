import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error';
import Home from './Pages/Home';
import About from './Pages/About';
import Api from './Pages/Api';
import Otro from './Pages/Otro';
import Productos from './Pages/Productos';
import Formulario from './Pages/Formulario';
import Layout from './Components/Layout';
/* import Navbar from './Components/Navbar'; */

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/api' element={<Api />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/otro' element={<Otro />} />
          <Route path='*' errorElement={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
