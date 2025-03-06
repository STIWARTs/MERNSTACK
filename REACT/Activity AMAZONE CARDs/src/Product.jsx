import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["1,200", "900", "1,500", "2,000"];
  let newPrice = ["900", "800", "1,200", "1,500"];
  let description = [
    ["Wireless Mouse", "8,000 DPI"],
    ["Stylus", "Magnetic Attachment"],
    ["Bluetooth Speaker" , "10W RMS"],
    ["Wireless Headphones", "20H Playback"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
