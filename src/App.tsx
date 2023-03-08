import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Item } from "./interfaces/ItemInterface";

const items: Item[] = [
  {
    id: 1,
    name: "Apple Watch",
    price: 350.99,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 750.99,
  },
  {
    id: 3,
    name: "Macbook Pro M2",
    price: 1500.0,
  },
  {
    id: 4,
    name: "Amazon Echo Dot",
    price: 25.99,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu items={items} />
    </div>
  );
}

export default App;
