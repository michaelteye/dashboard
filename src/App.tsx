import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApexCharts from "apexcharts";
import Chart from "chart.js/auto";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
