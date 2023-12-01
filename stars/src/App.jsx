import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainContent from "./components/mainContent/MainContent";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {

  const [appear, setAppear]= useState(false)

  return (
    <div className="body" >
      <div className="container" id="up">
        <Header />
        <div className="divider" />
     <Hero />
        <div className="divider" />
        <MainContent  
// @ts-ignore
        appear={appear}  setAppear={setAppear}  />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer appear={appear} /> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
