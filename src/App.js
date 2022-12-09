import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";
import Dashboard4 from "./components/Dashboard4";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/dashboard4" element={<Dashboard4 />} />
      </Routes>
    </Router>
  );
}

export default App;
