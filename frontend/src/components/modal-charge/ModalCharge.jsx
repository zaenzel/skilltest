import "./modalCharge.css";

const ModalCharge = ({ charge, setCharge }) => {
  setTimeout(() => {
    setCharge(false);
  }, 3000);

  return (
    <div className="container-modal">
      <div className={`modal-charge-wrapper ${charge ? "click" : "nonClick"} `}>
        <h1>ini modal charge</h1>
      </div>
    </div>
  );
};

export default ModalCharge;
