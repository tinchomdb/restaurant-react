import "./App.css";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carta" element={<Carta />} />
        <Route path="delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}

export default App;
