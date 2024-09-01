import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./layout";
import Brands from "./pages/Brands";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Brands />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
