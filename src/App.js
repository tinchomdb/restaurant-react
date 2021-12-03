import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import Delivery from "./pages/Delivery";
import Regalos from "./pages/Regalos";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="carta" element={<Carta />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="regalos" element={<Regalos />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
