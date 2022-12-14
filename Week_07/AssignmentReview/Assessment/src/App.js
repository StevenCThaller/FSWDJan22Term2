import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/index";
import Homepage from "./views/Homepage";
import ProductList from "./views/ProductList";

const App = (props) => {
  const [state, setState] = useState({
    productList: [
      {
        id: 1,
        name: "Wrench",
        price: "11.50",
        description: "Standard 3/16 Wrench.  Stainless Steel.",
        quantity: 5,
        department: "tool",
      },
      {
        id: 2,
        name: "Phillips Screwdriver",
        price: "3.25",
        description:
          "4-inch long stainless steel Screwdriver for Phillips Screws",
        quantity: 1,
        department: "tool",
      },
      {
        id: 3,
        name: "Power Drill",
        price: "85.99",
        description: "10 Amp Corded Power Drill",
        quantity: 1,
        department: "tool",
      },
      {
        id: 4,
        name: "Hacksaw",
        price: "15.50",
        description: "10-inch Stainless Steel Hacksaw",
        quantity: 1,
        department: "tool",
      },
      {
        id: 5,
        name: "25' Garden Hose",
        price: "9.50",
        quantity: 1,
        department: "garden",
      },
      {
        id: 6,
        name: "Bag of Garden Soil",
        price: "5.00",
        description: "Bag of high quality dirt",
        quantity: 1,
        department: "garden",
      },
      {
        id: 7,
        name: "Shovel",
        price: "12.00",
        description: "Round Point forged shovel with a wooden handle",
        quantity: 1,
        department: "garden",
      },
      {
        id: 8,
        name: "Flathead Screwdriver",
        price: "4.50",
        description:
          "4-inch long stainless steel Screwdriver for Flathead Screws",
        quantity: 0,
        department: "tool",
      },
      {
        id: 9,
        name: "Corded Drill",
        price: "124.50",
        description: "2.0 Amp 5600RPM Corded Drill",
        quantity: 1,
        department: "tool",
      },
      {
        id: 10,
        name: "Pack of 50 Screws",
        price: "8.50",
        description: "2 inch long Phillips Head construction screws",
        quantity: 2,
        department: "hardware",
      },
      {
        id: 11,
        name: '1/8" washers',
        price: "4.50",
        description: "Stainless Steel washers, set of 50",
        quantity: 1,
        department: "hardware",
      },
    ],
  });

  return (
    <div className="App">
      <div>
        <h1>Welcome to Kenzie Hardware!</h1>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/products/*"
          element={<ProductList productList={state.productList} />}
        />
      </Routes>
    </div>
  );
};

export default App;
