


import './App.css'
import Footer from './Componenet/Footer';
import Header from './Componenet/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
 

  return (
    
    <BrowserRouter>
    <Header />
     <Routes>
    <Route  path='/' element = {<Home />} />
    <Route  path='/about' element ={<About />} />
    <Route  path='/about' element ={<Project />} />
    <Route  path='/about' element ={<Skills />} />
    <Route  path='/about' element ={<Contact />} />
    
    
    
   
     </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App
