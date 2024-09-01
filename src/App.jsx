import React from "react";
import { Routes, Route } from "react-router-dom";
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
