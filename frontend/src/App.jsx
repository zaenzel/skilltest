import { useState, useEffect } from "react";
import "./App.css";
import Bill from "./components/bill/Bill";
import CardProduct from "./components/cardProduct/CardProduct";
import ModalSaveBill from "./components/modals/ModalSaveBill";

function App() {
  const [product, setProduct] = useState();
  const [chart, setChart] = useState([]);
  const [saveBill, setSaveBill] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <div className="app">
      <div className="modal-save">
        <ModalSaveBill saveBill={saveBill} setSaveBill={setSaveBill} />
      </div>
      <div className="container">
        <div className="left-wrapper">
          {product &&
            product.payload.map((el, i) => {
              return (
                <div
                  key={i}
                  onClick={(e) => setChart((menu) => menu.concat(el))}
                >
                  <CardProduct menu={el} />
                </div>
              );
            })}
        </div>
        <div className="right-wrapper">
          <Bill chart={chart} setChart={setChart} setSaveBill={setSaveBill} />
        </div>
      </div>
    </div>
  );
}

export default App;
