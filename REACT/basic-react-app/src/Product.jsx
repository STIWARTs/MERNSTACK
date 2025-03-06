import "./Product.css";

function Product({title, price, features}) {
    let isDiscount = price > 3000;
    let styles = { backgroundColor: isDiscount ? "pink" : "" };

  return (
    <div className = "Product" style={styles}>
      <h2>{title}</h2>
      <h5>Price: {price}</h5>
      {price>3000 && <p>Discount: 5%</p>}
    </div>
  );
}

export default Product;