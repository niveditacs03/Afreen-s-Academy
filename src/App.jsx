import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App()
{
  return <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
          <HomePage />
      }/>
    </Routes>
  </BrowserRouter>
  </div>
}
export default App;