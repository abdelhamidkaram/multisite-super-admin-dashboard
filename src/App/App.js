import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "../layout/Home/Home";
import { ThemeProvider } from "react-bootstrap";
import Sites from "../pages/sites/Sites";
import HomeContent from '../layout/Home/components/HomeContent'

function App() {
  
  return (
    <ThemeProvider dir="rtl" >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={() => <Home content={<HomeContent />} /> } />
          <Route path="/info" Component={() => <Sites />} />
          <Route path="/*" Component={() => <Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
