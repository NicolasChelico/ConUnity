import { React , useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home.js"
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>

          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
