import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Navbar from './Component/Navbar';
import Register from './screens/Register';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>

      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
