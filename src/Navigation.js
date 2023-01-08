import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import StarWarsPage from "./pages/StarWarsPage";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<InfoPage />} />
        <Route path="/star-wars" element={<StarWarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
