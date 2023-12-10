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
  const [appear, setAppear] = useState(false);

  return (
    <div className="body">
      <div className="container " id="up">
        <Header />
        <div className="divider"  id="hero"/>
        <Hero />
        <div className="divider" id="pro" />
        <MainContent
          // @ts-ignore
          appear={appear}
          setAppear={setAppear}
        />
        <div className="divider" />
<div id="down">
        <Contact    />

        </div>
        <div className="divider" />
        <div >
          <Footer appear={appear} />
        </div>







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
