import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header/>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
