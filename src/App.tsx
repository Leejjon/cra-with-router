import React, {lazy, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from "react-helmet-async";
import './App.css';
import {useTranslation} from "react-i18next";

const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const About = lazy(() => import("./pages/About"));

function App() {
    const {t} = useTranslation();
    return (
        <HelmetProvider>
            <div className="App">
                <Suspense fallback={<Loader/>}>
                    <BrowserRouter>
                        <Link id="linkToHome" to="/">
                            {t("TITLE_HOME")}
                        </Link><br/>
                        <Link id="linkToNews" to="/news">
                            {t("TITLE_NEWS")}
                        </Link><br/>
                        <Link id="linkToAbout" to="/about">
                            {t("TITLE_ABOUT")}
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
    const {t} = useTranslation();
    return (
        <div>{t("LOADING")}</div>
    );
}

export default App;
