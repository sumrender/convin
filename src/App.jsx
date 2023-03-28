import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
