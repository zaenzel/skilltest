import "./modalsavebill.css";

const ModalSaveBill = ({ saveBill, setSaveBill }) => {
  setTimeout(() => {
    setSaveBill(false);
  }, 3000);

  return (
    <div className={`modal-save-bill ${saveBill ? "active" : "nonactive"}`}>
      Bill berhasil di simpan{" "}
    </div>
  );
};

export default ModalSaveBill;
