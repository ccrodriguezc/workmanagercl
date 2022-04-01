import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
export default App;
