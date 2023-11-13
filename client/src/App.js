import { React , useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home.js"
import './App.css';
import { Footer } from './Components/footer.js';
import SpecificProgram from './Components/specificProgram.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Program/:id" element={<SpecificProgram />}/>

          </Routes> 
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
