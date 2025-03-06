import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App()
{
  return <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
          <HomePage />
      }/>
    </Routes>
    <Routes>
      <Route path="/about" element={
          <AboutPage />
      }/>
    </Routes>
  </BrowserRouter>
  </div>
}
export default App;