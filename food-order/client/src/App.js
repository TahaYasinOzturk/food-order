import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

//cartpage den geldik buraya router işlemini yaptık. gerekli olanlari cagirdik
