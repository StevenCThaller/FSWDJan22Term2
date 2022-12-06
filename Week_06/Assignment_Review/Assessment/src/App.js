import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import "./App.css";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import ConfirmationPage from "./components/ConfirmationPage";

const initialState = {
  name: "",
  email: ""
}

const App = () => {
  const [user, setUser] = useState(initialState)
  const [cart, setCart] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="register" element={<RegisterPage user={user} setUser={setUser} />} />
      <Route path="dashboard" element={<DashboardPage name={user.name} cart={cart} setCart={setCart} />} />
      <Route path="confirmation" element={<ConfirmationPage user={user} cart={cart} />} />
    </Routes>
  );
};

export default App;
