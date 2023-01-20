import { useState } from "react";
import "./App.css";
import Bill from "./components/bill/Bill";
import CardProduct from "./components/cardProduct/CardProduct";

function App() {
  const menu = [
    {
      id: 1,
      name: "Cah Taoge",
      price: 15000,
    },
    {
      id: 2,
      name: "Gurame Asam Mani",
      price: 69000,
    },

    {
      id: 3,
      name: "Nasi Putih",
      price: 0,
    },

    {
      id: 4,
      name: "Es Jeruk Nipis",
      price: 20000,
    },
  ];

  const [chart, setChart] = useState([]);

  return (
    <div className="app">
      <div className="container">
        <div className="left-wrapper">
          {menu.map((el, i) => {
            return (
              <div key={i} onClick={(e) => setChart((menu) => menu.concat(el))}>
                <CardProduct menu={el} />
              </div>
            );
          })}
        </div>
        <div className="right-wrapper">
          <Bill chart={chart} setChart={setChart} />
        </div>
      </div>
    </div>
  );
}

export default App;
