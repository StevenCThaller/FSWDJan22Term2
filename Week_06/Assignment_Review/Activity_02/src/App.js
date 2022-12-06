import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome'

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App;
