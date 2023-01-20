import "./bill.css";
import { ImUser, ImList2 } from "react-icons/im";
import { RiArrowDropDownLine, RiShoppingCart2Line } from "react-icons/ri";

const Bill = ({ chart, setChart, setSaveBill, setCharge }) => {
  const total = () => {
    let jml = 0;
    for (const elemen of chart) {
      jml += elemen.price;
    }
    return jml;
  };

  return (
    <div className="bill">
      <div className="top-bill">
        <div className="icon-wrap">
          <ImUser className="icon-bill" />
          <p>Customer</p>
        </div>
        <h1>New Customer</h1>
        <div className="icon-wrap">
          <ImList2 className="icon-bill" />
          <p>Billing List</p>
        </div>
      </div>
      <div className="center-bill">
        <div className="category-service">
          <div className="dropdown-category">
            <p>Dine in</p>
            <RiArrowDropDownLine className="icon-drop" />
          </div>
        </div>
        <div className="list-order">
          <div className="view-table">
            <p>1</p>
            <p>View Table</p>
          </div>

          {chart.map((e, i) => {
            return (
              <div className="list-order-item" key={i}>
                <p>{e.name}</p>
                <p>haha</p>
                <p>Rp. {e.price.toLocaleString("id")}</p>
              </div>
            );
          })}

          <div className="ttl-order">
            <div className="item-ttl-order">
              <p>Sub-Total :</p>
              <p>Rp. {total().toLocaleString("id")}</p>
            </div>
            <div className="item-ttl-order">
              <p>Total :</p>
              <p>Rp. {total().toLocaleString("id")}</p>
            </div>
          </div>
        </div>

        <div className="reset-order" onClick={(e) => setChart([])}>
          <p>Clear Sale</p>
        </div>

        <div className="empty"></div>
      </div>
      <div className="bot-bill">
        <div className="btn-saveprint">
          <button
            className="item-btn-saveprint"
            onClick={(e) => {
              setSaveBill(true);
            }}
          >
            Save Bill
          </button>
          <button className="item-btn-saveprint">Print Bill</button>
        </div>
        <div className="btn-charge" onClick={(e) => setCharge(true)}>
          <div className="left-btn-charge">
            <RiShoppingCart2Line className="icon-btn-charge" />
          </div>
          <p>Rp {total().toLocaleString("id")}</p>
        </div>
      </div>
    </div>
  );
};

export default Bill;
