import "./App.css";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import Delivery from "./pages/Delivery";
import Regalos from "./pages/Regalos";
import Order from "./pages/Order";
import Success from "./pages/Success";
import { getProducts } from "./store/productsSlice";
import { useEffect } from "react";
import axios from "axios";
import { getSections } from "./store/sectionsSlice";
import { getComments } from "./store/commentsSlice";
import Aos from "aos";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const sectionsRequest = await axios.get(
        "https://picardo-api.herokuapp.com/api/sections"
      );
      const productsRequest = await axios.get(
        "https://picardo-api.herokuapp.com/api/products"
      );
      const commentsRequest = await axios.get(
        "https://picardo-api.herokuapp.com/api/comments"
      );

      dispatch(getSections(sectionsRequest.data));
      dispatch(getProducts(productsRequest.data));
      dispatch(getComments(commentsRequest.data));
    }

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carta" element={<Carta />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="regalos" element={<Regalos />} />
        <Route path="orden" element={<Order />} />
        <Route path="exito" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
