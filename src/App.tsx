import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
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
