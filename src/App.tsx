import React, {lazy, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from "react-helmet-async";
import './App.css';

const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Suspense fallback={<Loader/>}>
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
                </Suspense>
            </div>
        </HelmetProvider>
    );
}

function Loader() {
    return (
        <div>Loading...</div>
    );
}

export default App;
