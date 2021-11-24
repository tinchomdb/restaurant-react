import "./App.css";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carta" element={<Carta />} />
      </Routes>
    </div>
  );
}

export default App;
