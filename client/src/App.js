import { React , useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home.js"
import './App.css';
import { Footer } from './Components/footer.js';
import SpecificProgram from './Components/specificProgram.js';
import CourseReview from './Components/courseReview.js';
import MainNavigation from './Components/MainNavigation.js';

const App = () => {
  const [programs, setPrograms] = useState([])
  
  return (
    <>
  
      
        <BrowserRouter>
        <MainNavigation>
          
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Program/:id" element={<SpecificProgram />}/>
                <Route path="/Program/:id/:courseID" element={<CourseReview />}/>
            </Routes> 
          </MainNavigation>
        </BrowserRouter>
        <Footer/>
        
     
    </>
  );
}

export default App;
