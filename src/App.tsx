import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Link id="linkToHome" to="/">
            Home
          </Link><br/>
          <Link id="linkToNews" to="/news">
            News
          </Link><br/>
          <Link id="linkToAbout" to="/about">
            About
          </Link>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
