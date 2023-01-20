import "./cardProduct.css";

const CardProduct = ({ menu }) => {
  return (
    <div className="card-product-wrapper">
      <img src="img/mie.jpg" alt="" className="img-product" />
      <p className="name-product">{menu.name}</p>
    </div>
  );
};

export default CardProduct;
